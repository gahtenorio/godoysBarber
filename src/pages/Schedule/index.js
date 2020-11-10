import React, { useState, useContext, useEffect } from 'react';
import firebase from '../../services/firebase';
import { AuthContext } from '../../Contexts/auth';
import * as Notifications from 'expo-notifications';
import {
  View,
  FlatList,
  Text,
  ActivityIndicator
} from 'react-native';

import styles from './styles';

export default function Schedule() {

  const { user } = useContext(AuthContext);
  const uid = user.uid;

  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [statusConfirmed, setStatusConfirmed] = useState('');
  const [statusDenied, setStatusDenied] = useState('');

  useEffect(() => {
    async function loadSchedules() {
      await firebase.database().ref('schedules')
        .child('schedule').orderByChild('uid').equalTo(`${uid}`).on('value', (snapshot) => {
          setSchedules([]);

          snapshot.forEach((childItem) => {
            let list = {
              key: childItem.key,
              date: childItem.val().date,
              hour: childItem.val().hour,
              service: childItem.val().service,
              price: childItem.val().price,
              status: childItem.val().status,
            }
            setSchedules(oldArray => [...oldArray, list]);
          })
          setLoading(false);
        })
    }

    loadSchedules();
  }, []);

  useEffect(() => {
    async function sendConfirmedNotification() {
      if (statusConfirmed === 'Confirmado') {

        await Notifications.presentNotificationAsync({
          title: 'Agendamento confirmado',
          body: 'Seu agendamento foi confirmado, estamos aguardando você! 😁',
          priority: Notifications.AndroidNotificationPriority.HIGH,
          vibrate: true,
          sound: true
        });
      } else {
        return;
      }
    }
    sendConfirmedNotification();
  }, [statusConfirmed]);

  useEffect(() => {
    async function sendDeniedNotification() {
      if (statusDenied === 'Horário indisponível') {
        await Notifications.presentNotificationAsync({
          title: 'Horário indisponível',
          body: 'Infelizmente este horário não está disponível, tente outro horário! 😕',
        });
      } else {
        return;
      }
    }
    sendDeniedNotification();
  }, [statusDenied]);

  if (schedules.length === 0) {
    return (

      <View style={[styles.container, { justifyContent: 'center' }]}>
        {loading ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919' }}>
            <ActivityIndicator size='large' color='#FFF' />
          </View>
          :
          <Text style={{ color: '#FFF', textAlign: 'center', fontFamily: 'Ubuntu_700Bold', fontSize: 18, marginHorizontal: 10 }}>Você não tem nenhum agendamento</Text>
        }
      </View>
    );
  } else {

    return (
      <View style={styles.container}>
        {loading ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#191919' }}>
            <ActivityIndicator size='large' color='#FFF' />
          </View>
          :
          <FlatList
            style={styles.schedules}
            showsVerticalScrollIndicator={false}
            data={schedules}
            keyExtractor={item => item.key}
            renderItem={({ item: schedule }) => (

              <View
                style={[
                  styles.scheduleContainer,
                  { borderTopColor: schedule.status === 'Aguardando confirmação' ? '#0E4BEF' : schedule.status === 'Confirmado' ? '#00FF00' : '#FF0000' }
                ]}>
                <Text
                  style={[
                    styles.status,
                    { color: schedule.status === 'Aguardando confirmação' ? '#0E4BEF' : schedule.status === 'Confirmado' ? '#00FF00' : '#FF0000' }
                  ]}>{schedule.status}</Text>

                {setStatusConfirmed(schedule.status)}
                {setStatusDenied(schedule.status)}

                <View style={styles.service}>
                  <Text style={styles.serviceText}>{schedule.service}</Text>
                  <Text style={styles.serviceText}>R$ {schedule.price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
                </View>

                <View style={styles.serviceDate}>
                  <Text style={styles.dateService}>{schedule.date}</Text>
                  <Text style={styles.dateService}>{schedule.hour}</Text>
                </View>
              </View>
            )}
          />
        }
      </View>
    );
  }
}