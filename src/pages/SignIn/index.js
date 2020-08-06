import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Contexts/auth';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../../components/BackButton';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  KeyboardAvoidingView,
  Keyboard,
  Modal,
  ActivityIndicator,
  TouchableNativeFeedback
} from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';
import godoysBarber from '../../assets/godoysBarber.png';

export default function Login() {

  const navigation = useNavigation();

  const [seePassword, setSeePassword] = useState(false);

  const [offset] = useState(new Animated.ValueXY({ x: 150, y: 0 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logoSize] = useState(new Animated.ValueXY({ x: 200, y: 200 }));
  const [godoys] = useState(new Animated.ValueXY({ x: 0, y: 0 }));

  const [email, setEmail] = useState('');
  const [password, SetPassword] = useState('');

  const {
    signIn,
    modalVisible,
    modalText,
    modalTitle,
    modalButton,
    modalButtonClose,
    lottieLoading
  } = useContext(AuthContext);

  function toggleSeePassword() {
    setSeePassword(!seePassword);
  }

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPassword');
  }

  function closeModal() {
    modalButtonClose();
  }

  function handleLogin() {
    Keyboard.dismiss();
    signIn(email, password);
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
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoSize.x, {
          toValue: 0,
          duration: 200
        }),
        Animated.timing(logoSize.y, {
          toValue: 0,
          duration: 200
        })
      ]),
      Animated.parallel([
        Animated.timing(godoys.x, {
          toValue: 200,
          duration: 200
        }),
        Animated.timing(godoys.y, {
          toValue: 60,
          duration: 200
        })
      ])
    ]).start();
  }

  function keyboardDidHide() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(godoys.x, {
          toValue: 0,
          duration: 200
        }),
        Animated.timing(godoys.y, {
          toValue: 0,
          duration: 200
        })
      ]),
      Animated.parallel([
        Animated.timing(logoSize.x, {
          toValue: 200,
          duration: 200
        }),
        Animated.timing(logoSize.y, {
          toValue: 200,
          duration: 100
        })
      ])
    ]).start()
  }

  return (
    <>
      <TouchableNativeFeedback
        onPress={() => Keyboard.dismiss()}
      >
        <KeyboardAvoidingView style={styles.container}>
          <BackButton />
          <Animated.Image
            style={[
              {
                width: logoSize.x,
                height: logoSize.y
              },
              {
                opacity: opacity,
                transform: [
                  { translateX: offset.x }
                ]
              }
            ]
            }
            source={logo}
          />
          <Animated.Image
            style={{
              width: godoys.x,
              height: godoys.y
            }}
            source={godoysBarber}
          />

          <Animated.View
            style={[
              styles.inputContainer,
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
                placeholder='Seu email'
                placeholderTextColor='#040404'
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
              />
              <Ionicons name='md-mail' size={20} style={{ position: 'absolute', right: 10 }} />
            </View>

            <View style={styles.inputArea}>
              <TextInput
                style={styles.input}
                placeholder='Sua senha'
                placeholderTextColor='#040404'
                underlineColorAndroid='transparent'
                autoCapitalize='none'
                autoCorrect={false}
                secureTextEntry={!seePassword}
                returnKeyType='send'
                value={password}
                onChangeText={SetPassword}
              />
              <TouchableOpacity
                style={{ position: 'absolute', right: 10 }}
                onPress={toggleSeePassword}>
                <Ionicons name={seePassword ? 'md-eye' : 'md-eye-off'} size={23} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={handleLogin}
            >
              {lottieLoading ? (
                <ActivityIndicator color="#FFF" size="small" />
              ) : (
                  <Text style={styles.textButtonLogin}>Entrar</Text>
                )}
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.forgotPasswordButton}
              onPress={navigateToForgotPassword}
            >
              <Text style={styles.textForgotPassword}>Esqueci minha senha</Text>
              <Ionicons name='md-lock' size={15} color='#808080' />
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