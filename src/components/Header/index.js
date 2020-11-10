import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import godoysBarber from '../../assets/godoysBarber.png';
import styles from './styles';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name='ios-menu' size={35} color='#9b9b9b' />
      </TouchableOpacity>
      <Image
        style={{ width: 170, height: 50 }}
        source={godoysBarber}
      />
      <TouchableOpacity>
        <Ionicons name='ios-notifications' size={35} color='transparent' />
      </TouchableOpacity>
    </View >
  );
}