import React, { useContext, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { AuthContext } from '../../Contexts/auth';
import firebase from '../../services/firebase';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Modal
} from 'react-native';

import BackButton from '../../components/BackButton';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

export default function Profile() {

  const { user, signOut } = useContext(AuthContext);

  const [imageURL, setImageURL] = useState(user.photoURL);;
  const [buttonSave, setButtonSave] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  async function openImagePickerAsync() {
    const permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false) {
      alert('É necessária permissão para acessar o rolo da câmera!!');
      return;
    }

    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });
      if (result.cancelled) {
      } else {
        setButtonSave(true);
        setImageURL(result.uri);
      }
    } catch (error) {
      alert('Ocorreu um erro');
    }
  };

  async function uploadProfileImage() {
    setLoading(true);
    try {
      const res = await fetch(imageURL);

      const blob = await res.blob();

      await firebase.storage().ref().child(`profile/${user.uid}`).put(blob).then(async () => {
        const url = await firebase.storage().ref().child(`profile/${user.uid}`).getDownloadURL()
        await firebase.database().ref('users').child(user.uid).update({
          photoURL: url
        });
      }).then(() => {
        setModalVisible(true);
        setLoading(false);
      })
    } catch (error) {
      setLoading(false);
      alert('Ocorreu um erro');
    }
  }

  function handleSignOut() {
    setModalVisible(false);
    signOut();
  }

  return (
    <>
      <ScrollView style={styles.container}>
        <BackButton />
        <View style={styles.profileContainer}>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={openImagePickerAsync}
          >
            {imageURL === '' ?
              <AntDesign name='user' size={150} color='#FFF' />
              :
              <Image
                style={{ width: 200, height: 200, borderRadius: 180 }}
                source={{ uri: imageURL }}
              />
            }
            <AntDesign name='camera' size={25} color='#040404' style={styles.imageIcon} />
          </TouchableOpacity>
          <Text style={styles.description}>{user.name}</Text>
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.title}>Email:</Text>
          <Text style={styles.data}>{user.email}</Text>
        </View>

        <View style={styles.buttonContainer}>
          {buttonSave ?
            <RectButton
              style={styles.saveButton}
              onPress={uploadProfileImage}
            >
              {loading ? (
                <ActivityIndicator color="#FFF" size="small" />
              ) : (
                  <Text style={styles.saveButtonText}>Salvar alterações</Text>
                )}
            </RectButton> :
            <View />
          }
        </View>

      </ScrollView>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Para aplicar as modificações será necessário fazer login novamente</Text>
              <Text style={styles.modalText}>As modificações só seram aplicadas em contas não vinculadas ao Facebook ou Google</Text>

              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: '#D2691E' }}
                onPress={handleSignOut}
              >
                <Text style={styles.textStyle}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}