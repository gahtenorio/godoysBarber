import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Contexts/auth';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import {
  View,
  Text,
  Animated,
  ActivityIndicator,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';

export default function Login() {

  const navigation = useNavigation();

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logoSize] = useState(new Animated.ValueXY({ x: 200, y: 200 }));

  const { signInWithFacebook, signInWithGoogle, lottieLoading, facebookLoading, googleLoading } = useContext(AuthContext);

  function navigateToSignUp() {
    navigation.navigate('SignUp');
  }

  function navigateToSignIn() {
    navigation.navigate('SignIn');
  }

  function handleSignInWithFacebook() {
    signInWithFacebook();
  }

  function handleSignInWithGoogle() {
    signInWithGoogle();
  }

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200
      })
    ]).start();
  }, []);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Animated.Image
          style={[
            {
              width: logoSize.x,
              height: logoSize.y
            },
            {
              opacity: opacity,
              transform: [
                { translateY: offset.y }
              ]
            }
          ]
          }
          source={logo}
        />

        <Animated.View
          style={[
            styles.inputContainer,
            {
              opacity: opacity,
              transform: [
                { translateY: offset.y }
              ]
            }
          ]}
        >

          <RectButton
            style={[styles.button, { backgroundColor: '#D2691E' }]}
            onPress={navigateToSignIn}
          >
            <Text style={styles.textButton}>Já tenho conta</Text>
          </RectButton>

          <RectButton
            style={[styles.button, { backgroundColor: '#3B5998', flexDirection: 'row' }]}
            onPress={handleSignInWithFacebook}
          >
            <Ionicons name='logo-facebook' size={25} color='#FFF' style={{ paddingRight: 15 }} />
            {facebookLoading ? (
              <ActivityIndicator color="#FFF" size="small" />
            ) : (
                <Text style={styles.textButton}>Continuar com o Facebook</Text>
              )
            }
          </RectButton>

          <RectButton
            style={[styles.button, { backgroundColor: '#db4a39', flexDirection: 'row' }]}
            onPress={handleSignInWithGoogle}
          >
            <Ionicons name='logo-google' size={25} color='#FFF' style={{ paddingRight: 15 }} />
            {googleLoading ? (
              <ActivityIndicator color="#FFF" size="small" />
            ) : (
                <Text style={styles.textButton}>Continuar com o Google</Text>
              )
            }
          </RectButton>
        </Animated.View>
      </SafeAreaView>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.signUpButton}
          onPress={navigateToSignUp}
        >
          <Ionicons name='ios-log-in' size={25} color='#D2691E' />
          <Text style={styles.signUpTextButton}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}