import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#040404'
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
    padding: 10
  },

  input: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    paddingRight: 25,
    width: '100%',
  },

  button: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginBottom: 15
  },

  textButton: {
    color: '#FFF',
    fontFamily: 'Roboto_700Bold',
    fontSize: 18
  },

  footer: {
    width: '100%',
    backgroundColor: '#040404',
    borderTopWidth: 1,
    borderColor: '#814B0F',
    paddingBottom: 10
  },

  signUpButton: {
    width: '100%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },

  signUpTextButton: {
    color: '#814B0F',
    fontSize: 18,
    fontFamily: 'Roboto_700Bold',
    marginLeft: 16
  },

});