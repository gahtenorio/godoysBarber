import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#040404'
  },

  backButton: {
    position: 'absolute',
    top: 0
  },

  inputContainer: {
    width: '90%',
    alignItems: 'center',
    marginTop: 30
  },

  inputArea: {
    backgroundColor: '#808080',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderRadius: 7,
    marginBottom: 10,
    padding: 10
  },

  input: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    paddingRight: 25,
    width: '100%',
  },

  buttonLogin: {
    backgroundColor: '#814B0F',
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  textButtonLogin: {
    color: '#FFF',
    fontFamily: 'Roboto_700Bold',
    fontSize: 18
  },

  forgotPasswordButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },

  textForgotPassword: {
    textAlign: 'center',
    color: '#808080',
    fontFamily: 'Roboto_400Regular',
    fontSize: 14,
    marginRight: 5
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