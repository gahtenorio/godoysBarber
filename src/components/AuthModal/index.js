import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/auth';
import { View, Modal, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function AuthModal() {

  const {
    modalVisible,
    modalText,
    modalTitle,
    modalButton,
    modalButtonClose,
  } = useContext(AuthContext);

  function closeModal() {
    modalButtonClose();
  }

  return (
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
              onPress={closeModal}
            >
              <Text style={styles.textStyle}>{modalButton}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}