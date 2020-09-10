import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../Contexts/auth';
import { RectButton } from 'react-native-gesture-handler';
import firebase from '../../services/firebase';
import SelectServiceModal from '../../components/SelectServiceModal';
import {
  View,
  Text,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';

import styles from './styles';

import img from '../../assets/hair.png';

export default function Home() {

  const { user } = useContext(AuthContext);

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState('');
  const [selectedServicePrice, setSelectedServicePrice] = useState();

  function handleServiceChoose(name, price) {
    setSelectedServiceName(name);
    setSelectedServicePrice(price);
    setModalVisible(true);
  }

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
          <Text style={styles.helloText}>Bem-vindo, {user && user.name}</Text>
          <Text style={styles.description}>Veja nossos serviços disponíveis</Text>
        </View>

        {loading ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919' }}>
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
                  <RectButton
                    style={styles.button}
                    onPress={() => handleServiceChoose(service.name, service.price)}
                  >
                    <Text style={styles.buttonText}>Agendar</Text>
                  </RectButton>
                </View>
              </View>
            )}
          />
        }

      </View>
      <SelectServiceModal
        show={modalVisible}
        setShow={setModalVisible}
        serviceName={selectedServiceName}
        servicePrice={selectedServicePrice}
      />
    </>
  );
}