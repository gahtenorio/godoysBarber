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
    backgroundColor: '#D2691E',
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

});