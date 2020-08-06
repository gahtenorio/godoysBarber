import React, { useContext, useState, useEffect } from 'react';
import firebase from '../../services/firebase';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator
} from 'react-native';
import { AuthContext } from '../../Contexts/auth';

import styles from './styles';

import img from '../../assets/hair.png';

export default function Home() {

  const { user, signOut } = useContext(AuthContext);

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadServices() {
      await firebase.database().ref('services').child('service').on('value', (snapshot) => {
        setServices([]);
        snapshot.forEach((childItem) => {
          let services = {
            key: childItem.key,
            name: childItem.val().name,
            price: childItem.val().price
          };
          setServices(oldArray => [...oldArray, services]);
          setLoading(false);
        })
      })
    }

    loadServices();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.helloText}>Olá, {user && user.name}</Text>
          <Text style={styles.description}>Veja nossos serviços disponíveis</Text>
        </View>

        {loading ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#040404' }}>
            <ActivityIndicator size='large' color='#FFF' />
          </View>
          :
          <FlatList
            style={styles.services}
            showsVerticalScrollIndicator={false}
            data={services}
            keyExtractor={item => item.key}
            renderItem={({ item: service }) => (
              <View style={styles.flatContainer}>
                <View style={styles.servicesContainer}>
                  <Image
                    style={{ width: 35, height: 50 }}
                    source={img}
                  />
                  <View style={styles.line} />
                  <View style={styles.detailService}>
                    <Text style={styles.nameServiceText}>{service.name}</Text>
                    <Text style={styles.priceServiceText}>R$ {service.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
                  </View>
                </View>
              </View>
            )}
          />
        }

      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => signOut()}
        >
          <Text style={styles.buttonText}>Solicitar agendamento</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}