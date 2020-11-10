import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Contexts/auth';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import BackButton from '../../components/BackButton';
import {
  View,
  Text,
  TextInput,
  Animated,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ActivityIndicator,
  TouchableNativeFeedback
} from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';
import godoysBarber from '../../assets/godoysBarber.png';
import AuthModal from '../../components/AuthModal';

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
    lottieLoading
  } = useContext(AuthContext);

  function toggleSeePassword() {
    setSeePassword(!seePassword);
  }

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPassword');
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
        bounciness: 10,
        useNativeDriver: false
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: false
      })
    ]).start();
  }, []);


  function keyboardDidShow() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(logoSize.x, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false
        }),
        Animated.timing(logoSize.y, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false
        })
      ]),
      Animated.parallel([
        Animated.timing(godoys.x, {
          toValue: 200,
          duration: 200,
          useNativeDriver: false
        }),
        Animated.timing(godoys.y, {
          toValue: 60,
          duration: 200,
          useNativeDriver: false
        })
      ])
    ]).start();
  }

  function keyboardDidHide() {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(godoys.x, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false
        }),
        Animated.timing(godoys.y, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false
        })
      ]),
      Animated.parallel([
        Animated.timing(logoSize.x, {
          toValue: 200,
          duration: 200,
          useNativeDriver: false
        }),
        Animated.timing(logoSize.y, {
          toValue: 200,
          duration: 100,
          useNativeDriver: false
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

            <RectButton
              style={styles.buttonLogin}
              onPress={handleLogin}
            >
              {lottieLoading ? (
                <ActivityIndicator color="#FFF" size="small" />
              ) : (
                  <Text style={styles.textButtonLogin}>Entrar</Text>
                )}
            </RectButton>

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
      <AuthModal />
    </>
  );
}