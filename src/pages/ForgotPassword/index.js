import React, { useState } from 'react';
import firebase from '../../services/firebase';
import BackButton from '../../components/BackButton';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  TextInput,
  Modal,
  Keyboard,
  ActivityIndicator
} from 'react-native';

import styles from './styles';

export default function ForgotPassword() {

  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');
  const [modalButton, setModalButton] = useState('');

  async function handleSubmit() {

    if (email === '') {
      setModalTitle('Houve um erro 😕');
      setModalText('Informe seu email');
      setModalButton('OK');
      setVisible(true);
    } else {
      setLoading(true);
      await firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
          setModalTitle('Email enviado!');
          setModalText('Verifique seu email para redefinir sua senha');
          setModalButton('OK');
          setVisible(true);
          setLoading(false);
          setEmail('');

        }).catch((error) => {
          setLoading(false);
          alert(error.code);
          if (error.code === 'auth/invalid-email') {
            setVisible(true);
            setModalTitle('Houve um erro 😕');
            setModalText('Email inválido, informe um email válido');
            setModalButton('OK');
            return;
          }

          if (error.code === 'auth/user-not-found') {
            setVisible(true);
            setModalTitle('Houve um erro 😕');
            setModalText(`Nenhuma conta cadastrada com ${email}`);
            setModalButton('OK');
            return;
          }
          else {
            setVisible(true);
            setModalTitle('Houve um erro 😕');
            setModalText('Algo deu errado tente novamente');
            setModalButton('Tentar novamente');
            return;
          }
        })
    }
  }

  return (
    <>
      <TouchableNativeFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <View style={styles.container}>
          <BackButton />
          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              placeholder='Endereço de email'
              placeholderTextColor='#808080'
              autoCapitalize='none'
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              {loading ? (
                <ActivityIndicator color="#FFF" size="small" />
              ) : (
                  <Text style={styles.textButton}>Recuperar senha</Text>
                )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableNativeFeedback>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={visible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{modalTitle}</Text>
              <Text style={styles.modalText}>{modalText}</Text>

              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: '#814B0F' }}
                onPress={() => setVisible(false)}
              >
                <Text style={styles.textStyle}>{modalButton}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}