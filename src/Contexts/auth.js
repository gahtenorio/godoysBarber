import React, { createContext, useState, useEffect } from 'react';
import *as Facebook from 'expo-facebook';
import *as GoogleSignIn from 'expo-google-sign-in'
import firebase from '../services/firebase';
import { AsyncStorage } from 'react-native';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {

  const [lottieLoading, setLottieLoading] = useState(false);
  const [facebookLoading, setFacebookLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [modalButton, setModalButton] = useState('');
  const [modalPickerPhotoVisible, setModalPickerPhotoVisible] = useState(false);
  const [buttonJump, setButtonJump] = useState(true);
  const [modalLoading, setModalLoading] = useState(false);
  const [sucessModalVisible, setSucessModalVisible] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {

    async function loadStorage() {
      const storageUser = await AsyncStorage.getItem('UserData');

      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }

    loadStorage();

  }, []);

  async function signInWithFacebook() {
    await Facebook.initializeAsync('574245363263941');
    const { token, type } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile, email'],
    });

    if (type === "success") {
      setFacebookLoading(true);
      const credential = firebase.auth.FacebookAuthProvider.credential(token);

      firebase.auth().signInWithCredential(credential)
        .then(async (value) => {
          let uid = value.user.uid;
          firebase.database().ref('users').child(uid).set({
            name: value.user.displayName,
            photoURL: value.user.photoURL,
          }).then(() => {
            let data = {
              name: value.user.displayName,
              photoURL: value.user.photoURL,
              uid: uid,
              email: value.user.email
            }
            setUser(data);
            storageUser(data);
            setFacebookLoading(false);

          })
        }).catch((error) => {
          alert('Algo deu errado');
        });
    }
  }

  async function signInWithGoogle() {
    await GoogleSignIn.askForPlayServicesAsync();
    const { type, user } = await GoogleSignIn.signInAsync();

    if (type === 'success') {
      setGoogleLoading(true);
      await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      const credential = firebase.auth.GoogleAuthProvider.credential(user.auth.idToken, user.auth.accessToken);

      await firebase.auth().signInWithCredential(credential)
        .then(async (value) => {
          let uid = value.user.uid;
          firebase.database().ref('users').child(uid).set({
            name: value.user.displayName,
            photoURL: value.user.photoURL,
          }).then(() => {
            let data = {
              name: value.user.displayName,
              photoURL: value.user.photoURL,
              uid: uid,
              email: value.user.email
            }
            setUser(data);
            storageUser(data);
            setGoogleLoading(false);
          })
        }).catch((error) => {
          alert('Algo deu errado');
        });
    }
  }

  async function signUp(email, password, name) {
    if (
      email === ''
      || name === ''
      || password === ''
    ) {
      setModalVisible(true);
      setModalTitle('Houve um erro 😕');
      setModalText('Preencha todos os campos para continuar');
      setModalButton('OK');
    } else {
      setLottieLoading(true);

      await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async (value) => {
          let uid = value.user.uid;

          await AsyncStorage.setItem('userUid', uid);
          await firebase.database().ref('users').child(uid).set({
            name: name,
          }).then(() => {
            setLottieLoading(false);
            setModalPickerPhotoVisible(true);
          })
        }).catch((error) => {
          setLottieLoading(false);

          if (error.code === 'auth/weak-password') {
            setModalVisible(true);
            setModalTitle('Houve um erro 😕');
            setModalText('Sua senha deve ter pelo menos 6 caracteres');
            setModalButton('OK');
            return;
          }

          if (error.code === 'auth/invalid-email') {
            setModalVisible(true);
            setModalTitle('Houve um erro 😕');
            setModalText('Email inválido, informe um email válido');
            setModalButton('OK');
            return;
          }

          if (error.code === 'auth/email-already-in-use') {
            setModalVisible(true);
            setModalTitle('Houve um erro 😕');
            setModalText('Esse email já está cadastrado');
            setModalButton('OK');
            return;
          }

          else {
            setModalVisible(true);
            setModalTitle('Houve um erro 😕');
            setModalText('Algo deu errado tente novamente');
            setModalButton('Tentar novamente');
            return;
          }
        })
    }
  }

  async function signIn(email, password) {
    if (
      email === ''
      || password === ''
    ) {
      setModalVisible(true);
      setModalTitle('Houve um erro 😕');
      setModalText('Preencha todos os campos para continuar');
      setModalButton('OK');
    } else {
      setLottieLoading(true);

      await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async (value) => {
          let uid = value.user.uid;

          await firebase.database().ref('users').child(uid).once('value')
            .then((snapshot) => {
              let data = {
                uid: uid,
                name: snapshot.val().name,
                photoURL: snapshot.val().photoURL,
                whatsApp: snapshot.val().whatsApp,
                email: value.user.email,
              }
              setUser(data);
              storageUser(data);
              setLottieLoading(false);
            })
        })
        .catch((error) => {
          setLottieLoading(false);
          if (error.code === 'auth/invalid-email') {
            setModalVisible(true);
            setModalTitle('Houve um erro 😕');
            setModalText('Email inválido, informe um email válido');
            setModalButton('OK');
            return;
          }

          if (error.code === 'auth/user-not-found') {
            setModalVisible(true);
            setModalTitle('Houve um erro 😕');
            setModalText(`Nenhuma conta cadastrada com ${email}`);
            setModalButton('OK');
            return;
          }

          if (error.code === 'auth/wrong-password') {
            setModalVisible(true);
            setModalTitle('Houve um erro 😕');
            setModalText('Senha incorreta');
            setModalButton('OK');
            return;
          }

          else {
            setModalVisible(true);
            setModalTitle('Houve um erro 😕');
            setModalText('Algo deu errado tente novamente');
            setModalButton('Tentar novamente');
            return;
          }
        })
    }
  }

  async function storageUser(data) {
    await AsyncStorage.setItem('UserData', JSON.stringify(data));
  }

  async function signOut() {
    await firebase.auth().signOut();
    await AsyncStorage.clear()
      .then(() => {
        setUser(null);
      })
  }

  async function uploadImage(imageURL) {
    setButtonJump(false);
    setModalLoading(true);
    const userUid = await AsyncStorage.getItem('userUid');
    try {
      const res = await fetch(imageURL);

      const blob = await res.blob();

      await firebase.storage().ref().child(`profile/${userUid}`).put(blob).then(async () => {
        const url = await firebase.storage().ref().child(`profile/${userUid}`).getDownloadURL()
        await firebase.database().ref('users').child(userUid).update({
          photoURL: url
        });
        await AsyncStorage.setItem('photoProfile', url);
      })
      setModalPickerPhotoVisible(false);
      setSucessModalVisible(true);
      setModalLoading(false);
    } catch (error) {
      setModalLoading(false);
      console.log(error)
    }
  }

  async function jump() {
    setModalLoading(true);

    const userUid = await AsyncStorage.getItem('userUid');
    await firebase.database().ref('users').child(userUid).update({
      photoURL: ''
    });
    setModalPickerPhotoVisible(false);
    setSucessModalVisible(true);
    setModalLoading(false);
  }

  function modalButtonClose() {
    setModalVisible(false);
  }

  function modalSucessClose() {
    setSucessModalVisible(false);
  }

  return (
    <AuthContext.Provider value={{
      signed: !!user,
      user,
      signIn,
      signUp,
      signInWithFacebook,
      signInWithGoogle,
      signOut,
      modalVisible,
      modalText,
      modalTitle,
      modalButton,
      modalButtonClose,
      modalPickerPhotoVisible,
      lottieLoading,
      facebookLoading,
      googleLoading,
      uploadImage,
      jump,
      loading,
      buttonJump,
      modalLoading,
      sucessModalVisible,
      modalSucessClose
    }}>
      {children}
    </AuthContext.Provider>
  );
}