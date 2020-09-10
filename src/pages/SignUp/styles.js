import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#040404'
  },

  containerInputs: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '90%',
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
    width: '100%'
  },

  button: {
    backgroundColor: '#D2691E',
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
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
  },

  pickerCenteredView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },

  pickerModalView: {
    backgroundColor: '#040404',
    borderRadius: 20,
    height: '100%',
    width: '100%',
    padding: 30,
    alignItems: 'center',
  },

  pickerModalButtons: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },

  pickerOpenButton: {
    borderRadius: 20,
    padding: 12,
    paddingLeft: 30,
    paddingRight: 30,
    elevation: 2,
  },

  pickerJumpButton: {
    marginTop: 15
  },

  pickerJumpButtonText: {
    color: '#737380',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16
  },

  pickerTextStyle: {
    color: '#FFF',
    fontFamily: 'Roboto_700Bold',
    fontSize: 14,
    textAlign: 'center'
  },

  pickerModalTitle: {
    fontSize: 18,
    fontFamily: 'Ubuntu_700Bold',
    color: '#FFF',
    marginBottom: 20
  },

  pickerModalImageButton: {
    width: 200,
    height: 200,
    borderRadius: 180,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#737373'
  },

  pickerModalImageIcon: {
    backgroundColor: '#F1F1F1',
    padding: 10,
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 0
  },

  pickerModalImage: {
    width: 200,
    height: 200,
    borderRadius: 180,
  },

  pickerModalText: {
    fontFamily: 'Roboto_500Medium',
    lineHeight: 24,
    fontSize: 15,
    color: '#737380',
    textAlign: 'center'
  }

});