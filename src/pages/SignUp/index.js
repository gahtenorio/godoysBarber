import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Contexts/auth';
import Icon from '@expo/vector-icons/Ionicons';
import BackButton from '../../components/BackButton';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Animated,
  Keyboard,
  Modal,
  ActivityIndicator,
  KeyboardAvoidingView,
  TouchableNativeFeedback
} from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';

export default function SignUp() {
  const [offset] = useState(new Animated.ValueXY({ x: 150, y: 0 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logoSize] = useState(new Animated.ValueXY({ x: 200, y: 200 }));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [whatsApp, setWhatsApp] = useState('');

  const [seePassword, setSeePassword] = useState(false);

  const {
    signUp,
    modalVisible,
    modalText,
    modalTitle,
    modalButton,
    modalButtonClose,
    lottieLoading
  } = useContext(AuthContext);

  function handleSignUp() {
    Keyboard.dismiss();
    signUp(email, password, name, whatsApp);
  }

  function closeModal() {
    modalButtonClose();
  }

  function toggleSeePassword() {
    setSeePassword(!seePassword);
  }

  useEffect(() => {
    KeyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    KeyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.parallel([
      Animated.spring(offset.x, {
        toValue: 0,
        speed: 4,
        bounciness: 10
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200
      })
    ]).start();
  }, []);

  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logoSize.x, {
        toValue: 0,
        duration: 200
      }),
      Animated.timing(logoSize.y, {
        toValue: 0,
        duration: 200
      })
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logoSize.x, {
        toValue: 200,
        duration: 200
      }),
      Animated.timing(logoSize.y, {
        toValue: 200,
        duration: 200
      })
    ]).start()
  }

  return (
    <>
      <TouchableNativeFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <KeyboardAvoidingView style={styles.container}>
          <BackButton />
          <View style={styles.containerLogo}>
            <Animated.Image
              style={[{
                width: logoSize.x,
                height: logoSize.y
              },
              {
                opacity: opacity,
                transform: [
                  { translateX: offset.x }
                ]
              }
              ]}
              source={logo}
            />
          </View>

          <Animated.View
            style={[
              styles.containerInputs,
              {
                opacity: opacity,
                transform: [
                  { translateX: offset.x }
                ]
              }
            ]}
          >
            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder='Nome social'
                placeholderTextColor='#040404'
                autoCapitalize='words'
                value={name}
                onChangeText={setName}
              />
              <Icon name='md-person' size={20} style={{ position: 'absolute', right: 10 }} />
            </View>

            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder='whatsApp'
                placeholderTextColor='#040404'
                keyboardType='numeric'
                maxLength={11}
                value={whatsApp}
                onChangeText={setWhatsApp}
              />
              <Icon name='logo-whatsapp' size={20} style={{ position: 'absolute', right: 10 }} />
            </View>

            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor='#040404'
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
              />
              <Icon name='md-mail' size={20} style={{ position: 'absolute', right: 10 }} />
            </View>

            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder='Sua senha'
                placeholderTextColor="#040404"
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={!seePassword}
                returnKeyType='send'
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={{ position: 'absolute', right: 10 }}
                onPress={toggleSeePassword}>
                <Icon name={seePassword ? 'md-eye' : 'md-eye-off'} size={20} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={handleSignUp}
            >
              {lottieLoading ? (
                <ActivityIndicator color="#FFF" size="small" />
              ) : (
                  <Text style={styles.textButton}>Finalizar cadastro</Text>
                )}
            </TouchableOpacity>
          </Animated.View>
        </KeyboardAvoidingView>
      </TouchableNativeFeedback>


      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{modalTitle}</Text>
              <Text style={styles.modalText}>{modalText}</Text>

              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: '#814B0F' }}
                onPress={closeModal}
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