import React from 'react';
import { useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import BackButton from '../../components/BackButton';
import { View, Image, Text, ScrollView, Linking } from 'react-native';

import styles from './styles';

export default function Detail() {

  const route = useRoute();
  const product = route.params.product;

  const message = `Olá, gostaria de encomendar o produto: ${product.name}!`;

  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=+5587991212557&text=${message}`)
  }

  return (
    <ScrollView style={styles.container}>
      <BackButton />
      <View style={styles.imageContainer}>
        <Image source={{ uri: product.imageURL }} style={styles.image} resizeMode='cover' />
      </View>
      <View style={styles.detailContainer}>
        <View style={styles.priceAndButtonContainer}>
          <Text style={styles.price}>R$ {product.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
          <RectButton
            style={styles.button}
            onPress={sendWhatsApp}
          >
            <Text style={styles.buttonText}>Encomendar</Text>
          </RectButton>
        </View>
        <Text style={styles.detail}>{product.detail}</Text>
      </View>
    </ScrollView>
  );
}