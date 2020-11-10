import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../Contexts/auth';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { AntDesign } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/Ionicons';
import { RectButton } from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton';
import AuthModal from '../../components/AuthModal';
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
  TouchableNativeFeedback,
  Image
} from 'react-native';

import styles from './styles';
import logo from '../../assets/logo.png';

export default function SignUp() {
  const navigation = useNavigation();

  const [offset] = useState(new Animated.ValueXY({ x: 150, y: 0 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logoSize] = useState(new Animated.ValueXY({ x: 200, y: 200 }));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const [seePassword, setSeePassword] = useState(false);

  const [imageURL, setImageURL] = useState('');
  const [profileIcon, setProfileIcon] = useState(false);
  const [buttonPickerPhoto, setButtonPickerPhoto] = useState(false);

  const {
    signUp,
    lottieLoading,
    modalPickerPhotoVisible,
    uploadImage,
    jump,
    buttonJump,
    modalLoading,
    sucessModalVisible,
    modalSucessClose
  } = useContext(AuthContext);

  function handleSignUp() {
    Keyboard.dismiss();
    signUp(email, password, name);
  }

  function toggleSeePassword() {
    setSeePassword(!seePassword);
  }

  function handleUploadImage() {
    uploadImage(imageURL);
  }

  function handleJump() {
    jump();
  }

  function navigateToSignIn() {
    modalSucessClose();
    navigation.navigate('SignIn');
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
    ]).start();
  }

  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logoSize.x, {
        toValue: 200,
        duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(logoSize.y, {
        toValue: 200,
        duration: 200,
        useNativeDriver: false
      })
    ]).start()
  }

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
        setButtonPickerPhoto(true);
        setProfileIcon(true);
        setImageURL(result.uri);
      }
    } catch (error) {
      alert('Ocorreu um erro');
    }
  };

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
              <RectButton
                style={{ position: 'absolute', right: 10 }}
                onPress={toggleSeePassword}>
                <Icon name={seePassword ? 'md-eye' : 'md-eye-off'} size={20} />
              </RectButton>
            </View>

            <RectButton
              style={styles.button}
              onPress={handleSignUp}
            >
              {lottieLoading ? (
                <ActivityIndicator color="#FFF" size="small" />
              ) : (
                  <Text style={styles.textButton}>Finalizar cadastro</Text>
                )}
            </RectButton>
          </Animated.View>
        </KeyboardAvoidingView>
      </TouchableNativeFeedback>


      <AuthModal />

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalPickerPhotoVisible}
        >
          <View style={styles.pickerCenteredView}>
            <View style={styles.pickerModalView}>
              <Text style={styles.pickerModalTitle}>Adicione uma foto ao seu perfil</Text>
              <Text style={styles.pickerModalText}>Olá, {name} {'\n'} Nos ajude a identificá-lo.</Text>

              <TouchableOpacity
                style={styles.pickerModalImageButton}
                onPress={openImagePickerAsync}
              >
                {profileIcon ?
                  <Image
                    source={{ uri: imageURL }}
                    style={styles.pickerModalImage}
                  />
                  :
                  <AntDesign name='user' size={150} color='#FFF' />
                }
                <AntDesign name='camera' size={25} color='#040404' style={styles.pickerModalImageIcon} />
              </TouchableOpacity>

              <View style={styles.pickerModalButtons}>

                {buttonPickerPhoto ?
                  <TouchableOpacity
                    style={{ ...styles.pickerOpenButton, backgroundColor: '#D2691E' }}
                    onPress={handleUploadImage}
                  >
                    {modalLoading ? (
                      <ActivityIndicator color="#FFF" size="small" />
                    ) : (
                        <Text style={styles.pickerTextStyle}>Concluir</Text>
                      )}
                  </TouchableOpacity>
                  : <View />
                }

                {buttonJump ?
                  <TouchableOpacity
                    style={styles.pickerJumpButton}
                    onPress={handleJump}
                  >
                    {modalLoading ? (
                      <ActivityIndicator color="#FFF" size="small" />
                    ) : (
                        <Text style={styles.pickerJumpButtonText}>Pular</Text>
                      )}
                  </TouchableOpacity>
                  :
                  <View />
                }

              </View>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={sucessModalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Conta criada com sucesso</Text>
              <Text style={styles.modalText}>Faça login para continuar</Text>

              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: '#D2691E' }}
                onPress={navigateToSignIn}
              >
                <Text style={styles.textStyle}>Fazer login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}