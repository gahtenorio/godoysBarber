import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Image,
  Text,
  Modal,
  TouchableOpacity,
  Linking,
  Share,
} from 'react-native';
import { AntDesign, FontAwesome, Ionicons, Entypo } from '@expo/vector-icons';
import { AuthContext } from '../../Contexts/auth';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

export default function DrawerContent() {

  const navigation = useNavigation();
  const { user, signOut } = useContext(AuthContext);

  const [modalVisible, setModalVisible] = useState(false);

  function handleSignOut() {
    { () => navigation.closeDrawer() }
    setModalVisible(true);
  }

  function handleLinkToWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+5587991212557`);
  }

  function handleLinkToInstagram() {
    Linking.openURL(`instagram://user?username=godoysbarber`);
  }

  function handleLinkToMaps() {
    Linking.openURL(`https://www.google.com/maps/search/?api=1&query=Brasil+Pernambuco+venturosa+Godoy%27s+Barber`);
  }

  function navigateToProfile() {
    navigation.navigate('Profile');
  }

  async function shareFriends() {
    try {
      const result = await Share.share({
        message:
          'Godoys Barber ||\nFaça seus agendamentos na Godoys Barber de uma forma simples e rápida.\nBaixe nosso aplicativo: www.godoysbarber.com.br'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View
          style={styles.photoProfile}
        >
          {user.photoURL !== '' ?
            <Image
              style={{ width: 70, height: 70, borderRadius: 180 }}
              source={{ uri: user.photoURL }}
            /> :
            <AntDesign name='user' size={50} color='#FFF' />
          }
        </View>
        <View style={styles.userName}>
          <Text style={styles.userNameText}>Olá, {user.name}</Text>
        </View>

        <View style={styles.line} />

        <RectButton
          style={styles.button}
          onPress={navigateToProfile}
        >
          <FontAwesome name='user' size={25} color='#FFF' />
          <Text style={styles.buttonText}>Perfil</Text>
        </RectButton>

        <RectButton
          style={styles.button}
          onPress={handleLinkToWhatsapp}
        >
          <Ionicons name='logo-whatsapp' size={25} color='#FFF' />
          <Text style={styles.buttonText}>whatsApp</Text>
        </RectButton>

        <RectButton
          style={styles.button}
          onPress={handleLinkToInstagram}
        >
          <Ionicons name='logo-instagram' size={25} color='#FFF' />
          <Text style={styles.buttonText}>Instagram</Text>
        </RectButton>

        <RectButton
          style={styles.button}
          onPress={handleLinkToMaps}
        >
          <Entypo name='location' size={25} color='#FFF' />
          <Text style={styles.buttonText}>Localização</Text>
        </RectButton>

        <RectButton
          style={styles.button}
          onPress={shareFriends}
        >
          <Ionicons name='md-people' size={25} color='#FFF' />
          <Text style={styles.buttonText}>Convidar amigos</Text>
        </RectButton>

      </View>

      <View style={[styles.line, { backgroundColor: '#040404' }]} />

      <RectButton
        style={styles.button}
        onPress={handleSignOut}
      >
        <Ionicons name='ios-exit' size={25} color='#FFF' />
        <Text style={styles.buttonText}>Sair</Text>
      </RectButton>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Deseja sair?</Text>

              <View style={styles.modalButtons}>
                <TouchableOpacity
                  style={{ ...styles.openButton, backgroundColor: '#D2691E' }}
                  onPress={() => signOut()}
                >
                  <Text style={styles.textStyle}>Sim</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ ...styles.openButton, backgroundColor: '#D2691E' }}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.textStyle}>Não</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}