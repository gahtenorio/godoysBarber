import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalView: {
    margin: 20,
    backgroundColor: '#191919',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  openButton: {
    borderRadius: 20,
    padding: 12,
    paddingLeft: 30,
    paddingRight: 30,
    elevation: 2,
    marginTop: 10,
  },

  textStyle: {
    color: '#FFF',
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
    textAlign: 'center'
  },

  modalTitle: {
    fontSize: 18,
    fontFamily: 'Ubuntu_700Bold',
    color: '#FFF',
    marginBottom: 20
  },

  modalText: {
    marginBottom: 15,
    fontFamily: 'Roboto_500Medium',
    lineHeight: 24,
    fontSize: 15,
    color: '#737380',
    textAlign: 'center'
  }
});