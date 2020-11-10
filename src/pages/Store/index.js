import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../services/firebase';
import {
  View,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native';

import styles from './styles';

export default function Store() {

  const navigation = useNavigation();

  function navigateToDetail(product) {
    navigation.navigate('Detail', { product });
  }

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      await firebase.database().ref('products').child('product').on('value', (snapshot) => {
        setProducts([]);
        snapshot.forEach((childItem) => {
          let products = {
            key: childItem.key,
            name: childItem.val().name,
            price: childItem.val().price,
            detail: childItem.val().detail,
            imageURL: childItem.val().imageURL
          };
          setProducts(oldArray => [...oldArray, products].reverse());
        })
        setLoading(false);
      })
    }
    loadProducts();
  }, []);

  return (
    <View style={styles.container}>
      {loading ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919' }}>
          <ActivityIndicator size='large' color='#FFF' />
        </View>
        :
        <FlatList style={styles.flatContainer}
          showsVerticalScrollIndicator={false}
          data={products}
          keyExtractor={item => item.key}
          renderItem={({ item: product }) => (
            <TouchableOpacity
              style={styles.productsContainer}
              onPress={() => navigateToDetail(product)}
            >
              <View style={styles.product}>
                <View>
                  <Image source={{ uri: product.imageURL }} style={styles.image} />
                </View>
                <View>
                  <Text style={styles.name}>{product.name}</Text>
                  <Text style={styles.price}>R$ {product.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      }
    </View>
  );
}