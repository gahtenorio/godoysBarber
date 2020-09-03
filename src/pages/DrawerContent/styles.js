import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919'
  },

  photoProfile: {
    width: 70,
    height: 70,
    borderRadius: 180,
    backgroundColor: '#737373',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 20
  },

  userName: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20
  },

  userNameText: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Ubuntu_700Bold',
  },

  line: {
    height: '0.1%',
    width: '100%',
    backgroundColor: '#F2F2F2',
    opacity: 0.5
  },

  button: {
    backgroundColor: '#191919',
    width: '100%',
    paddingLeft: 30,
    paddingBottom: 12,
    paddingTop: 12,
    alignContent: 'center',
    flexDirection: 'row'
  },

  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Roboto_400Regular',
    marginLeft: 10
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
    backgroundColor: '#040404',
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

  modalButtons: {
    flexDirection: 'row',
  },

  openButton: {
    borderRadius: 20,
    padding: 12,
    paddingLeft: 30,
    paddingRight: 30,
    elevation: 2,
    marginTop: 10,
    margin: 15
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

});