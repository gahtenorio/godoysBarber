import React, { useEffect, useState } from 'react';
import firebase from '../../services/firebase';
import { Ionicons } from '@expo/vector-icons';
import {
  View,
  FlatList,
  Image,
  Text,
  ActivityIndicator,
  Linking
} from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

export default function Cut() {

  const [cuts, setCuts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCuts() {
      await firebase.database().ref('cuts').child('cut').on('value', (snapshot) => {
        setCuts([]);
        snapshot.forEach((childItem) => {
          let cuts = {
            key: childItem.key,
            userName: childItem.val().userName,
            imageURL: childItem.val().imageURL
          };
          setCuts(oldArray => [...oldArray, cuts].reverse());
        })
        setLoading(false);
      })
    }
    loadCuts();
  }, []);

  function handleLinkToInstagram(userName) {
    Linking.openURL(`instagram://user?username=${userName}`);
  }

  return (
    <View style={styles.container}>
      {loading ?
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919' }}>
          <ActivityIndicator size='large' color='#FFF' />
        </View>
        :
        <FlatList style={styles.flatContainer}
          showsVerticalScrollIndicator={false}
          data={cuts.reverse()}
          keyExtractor={item => item.key}
          renderItem={({ item: cut }) => (
            <>
              <Image source={{ uri: cut.imageURL }} style={styles.image} />
              <View style={styles.buttonContainer}>
                <RectButton
                  style={styles.button}
                  onPress={() => handleLinkToInstagram(cut.userName)}
                >
                  <Ionicons name='logo-instagram' size={30} color='#FFF' />
                  <Text style={styles.buttonText}>@{cut.userName}</Text>
                </RectButton>
              </View>
            </>
          )}
        />
      }
    </View>
  );
}