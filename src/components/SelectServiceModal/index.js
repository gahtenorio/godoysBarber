import React, { useState, useEffect, useContext } from 'react';
import { TextInputMask } from 'react-native-masked-text';
import { AuthContext } from '../../Contexts/auth';
import firebase from '../../services/firebase';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  TouchableNativeFeedback,
  TouchableHighlight,
  ActivityIndicator
} from 'react-native';

import styles from './styles';

const months = [
  'Janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro',
];

const days = [
  'Dom',
  'Seg',
  'Ter',
  'Qua',
  'Qui',
  'Sex',
  'Sab'
];

const hoursWeek = [
  '09:00',
  '10:00',
  '11:00',
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00'
];

const hoursSaturday = [
  '13:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00'
]

export default function SelectServiceModal({ show, setShow, serviceName, servicePrice }) {

  const navigation = useNavigation();

  const { user } = useContext(AuthContext);

  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(null);
  const [listDays, setListDays] = useState([]);
  const [listHours, setListHours] = useState([]);
  const [phone, setPhone] = useState('');

  const [loading, setLoading] = useState(false);

  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  useEffect(() => {
    let daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    let newListDays = [];

    for (let i = 1; i <= daysInMonth; i++) {
      let d = new Date(selectedYear, selectedMonth, i);
      let year = d.getFullYear();
      let month = d.getMonth() + 1;
      let day = d.getDate();

      month = month < 10 ? '0' + month : month;
      day = day < 10 ? '0' + day : day;

      newListDays.push({
        status: d.getDay() === 0 ? false : true,
        weekday: days[d.getDay()],
        number: i
      })
    }

    setListDays(newListDays);
    setSelectedDay(0);
    setListHours([]);
    setSelectedHour(0);

  }, [selectedMonth, selectedYear])

  useEffect(() => {
    let today = new Date();
    setSelectedYear(today.getFullYear());
    setSelectedMonth(today.getMonth());
    setSelectedDay(today.getDate());
  }, []);

  useEffect(() => {
    if (selectedDay > 0) {

      setListHours(hoursWeek);
    }
    setSelectedHour(null);
  }, [selectedDay]);

  function handleCloseButton() {
    setShow(false);
  }

  async function handleFinishButton() {
    Keyboard.dismiss();
    setLoading(true);
    if (
      selectedYear > 0 &&
      selectedMonth > 0 &&
      selectedDay > 0 &&
      selectedHour != null
    ) {
      if (phone.length < 14) {
        setLoading(false);
        setModalTitle('Houve um erro 😕');
        setModalText('É necessário informar um número de telefone válido');
        setModalVisible(true);
      } else {

        let key = await (await firebase.database().ref('schedules').child(user.uid).push()).key;
        await firebase.database().ref('schedules').child('schedule').child(key).set({
          uid: user.uid,
          name: user.name,
          email: user.email,
          photoURL: user.photoURL,
          phone: phone,
          service: serviceName,
          price: servicePrice,
          date: `${selectedDay}/${selectedMonth + 1}/${selectedYear}`,
          hour: selectedHour,
          status: 'Aguardando confirmação'
        }).then(() => {
          setLoading(false);
          setModalSuccessVisible(true);

          firebase.database().ref('users').child('lNNBv4nE8lcwe377mVVEcy5vJHo2')
            .update({
              notification: true
            })

        }).catch((error) => {
          console.log(error);
          setLoading(False);
          setModalTitle('Houve um erro 😕');
          setModalText('Tente novamente');
          setModalVisible(true);
        })

      }
    } else {
      setLoading(false);
      setModalTitle('Houve um erro 😕');
      setModalText('Selecione o dia e a hora');
      setModalVisible(true);
    }
  }

  function handleLeftDateClick() {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() - 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  }

  function handleRigthDateClick() {
    let mountDate = new Date(selectedYear, selectedMonth, 1);
    mountDate.setMonth(mountDate.getMonth() + 1);
    setSelectedYear(mountDate.getFullYear());
    setSelectedMonth(mountDate.getMonth());
    setSelectedDay(0);
  }

  function handleFinish() {
    navigation.navigate('Agendamentos');
    setShow(false);
    setModalSuccessVisible(false);
  }

  return (
    <>
      <Modal
        transparent={true}
        visible={show}
        animationType='slide'
      >

        <View style={styles.modalArea}>
          <TouchableNativeFeedback
            onPress={() => Keyboard.dismiss()}
          >
            <View style={styles.modalBody}>
              <TouchableOpacity
                style={{ marginBottom: 10 }}
                onPress={handleCloseButton}
              >
                <Ionicons name='ios-arrow-down' size={30} color={'#040404'} />
              </TouchableOpacity>

              <View style={styles.modalItem}>
                <View style={styles.serviceInfo}>
                  <Text style={styles.serviceName}>{serviceName}</Text>
                  <Text style={styles.servicePrice}>R$ {parseFloat(servicePrice).toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')}</Text>
                </View>
              </View>

              <View style={styles.modalItem}>
                <View style={styles.dateInfo}>
                  <TouchableOpacity
                    style={styles.datePrevArea}
                    onPress={handleLeftDateClick}
                  >
                    <Ionicons name='ios-arrow-back' size={30} color={'#040404'} />
                  </TouchableOpacity>

                  <View style={styles.dateTitleArea}>
                    <Text style={styles.dateTitle}>{months[selectedMonth]} {selectedYear}</Text>
                  </View>

                  <TouchableOpacity
                    style={styles.dateNextArea}
                    onPress={handleRigthDateClick}

                  >
                    <Ionicons name='ios-arrow-forward' size={30} color={'#040404'} />
                  </TouchableOpacity>
                </View>
                <ScrollView
                  style={styles.dateList}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  {listDays.map((item, key) => (
                    <TouchableOpacity
                      style={[
                        styles.dateItem,
                        {
                          opacity: item.status ? 1 : 0.5,
                          backgroundColor: item.number === selectedDay ? '#D2691E' : '#FFF'
                        }]}
                      key={key}
                      onPress={() => item.status ? setSelectedDay(item.number) : null}
                    >
                      <Text
                        style={[
                          styles.dateItemWeekDay,
                          { color: item.number === selectedDay ? '#FFF' : '#000' }
                        ]}
                      >{item.weekday}
                      </Text>
                      <Text
                        style={[
                          styles.dateItemNumber,
                          { color: item.number === selectedDay ? '#FFF' : '#000' }
                        ]}>
                        {item.number}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>

              {selectedDay > 0 && listHours.length > 0 &&
                <View style={styles.modalItem}>
                  <ScrollView
                    style={styles.timeList}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    {listHours.map((item, key) => (
                      <TouchableOpacity
                        style={[
                          styles.timeItem,
                          { backgroundColor: item === selectedHour ? '#D2691E' : '#FFF' }
                        ]}
                        key={key}
                        onPress={() => setSelectedHour(item)}
                      >
                        <Text
                          style={[
                            styles.timeItemText,
                            { color: item === selectedHour ? '#FFF' : '#000' }
                          ]}>
                          {item}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              }

              <View style={styles.modalItem}>
                <TextInputMask
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99)'
                  }}
                  style={styles.input}
                  placeholder='Seu telefone para contato'
                  placeholderTextColor='#737380'
                  keyboardType='phone-pad'
                  value={phone}
                  onChangeText={setPhone}
                />
              </View>
              <TouchableHighlight
                style={styles.finishButton}
                onPress={handleFinishButton}
              >
                {loading ? (
                  <ActivityIndicator color="#FFF" size="small" />
                ) : (
                    <Text style={styles.finishButtonText}>Agendar</Text>
                  )}
              </TouchableHighlight>
            </View>
          </TouchableNativeFeedback>
        </View>
      </Modal>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>{modalTitle}</Text>
              <Text style={styles.modalText}>{modalText}</Text>

              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: '#D2691E' }}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.textStyle}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalSuccessVisible}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitle}>Sua solicitação foi enviada!</Text>
              <Text style={styles.modalText}>Fique atento, verifique seus agendamentos, vamos analizar sua solicitação e retorna-lo o mais rápido possível!</Text>

              <TouchableOpacity
                style={{ ...styles.openButton, backgroundColor: '#D2691E' }}
                onPress={handleFinish}
              >
                <Text style={styles.textStyle}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}