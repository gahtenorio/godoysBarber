import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404',
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputsContainer: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    height: 45,
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#808080',
    textAlign: 'center',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    color: '#FFF'
  },

  button: {
    width: '100%',
    height: 45,
    backgroundColor: '#814B0F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 20
  },

  textButton: {
    color: '#FFF',
    fontFamily: 'Roboto_700Bold',
    fontSize: 18
  },

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
    backgroundColor: '#FFF',
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
    marginBottom: 20
  },

  modalText: {
    marginBottom: 15,
    fontFamily: 'Roboto_500Medium',
    lineHeight: 24,
    fontSize: 15,
    textAlign: 'center'
  }
});