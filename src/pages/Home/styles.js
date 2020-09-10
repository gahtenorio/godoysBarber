import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919'
  },

  textContainer: {
    marginTop: 30,
    paddingLeft: 20,
    paddingRight: 20
  },

  helloText: {
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold',
    marginBottom: 20,
    color: '#FFF'
  },

  description: {
    fontSize: 17,
    fontFamily: 'Roboto_400Regular',
    color: '#737380'
  },

  button: {
    position: 'absolute',
    right: 10,
    bottom: 30,
    height: 40,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D2691E',
    borderRadius: 8
  },

  buttonText: {
    color: '#FFF',
    fontFamily: 'Roboto_700Bold',
    fontSize: 16
  },

  services: {
    marginTop: 30
  },

  flatContainer: {
    marginHorizontal: 5,
    marginBottom: 15,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#808080'
  },

  servicesContainer: {
    flexDirection: 'row',
    padding: 25
  },

  line: {
    width: 1,
    height: '120%',
    alignSelf: 'center',
    backgroundColor: '#9b9b9b',
    opacity: 0.5,
    marginLeft: 20,
  },

  detailService: {
    justifyContent: 'center',
  },

  nameServiceText: {
    color: '#FFF',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 18,
    marginBottom: 5,
    marginRight: 10,
    marginLeft: 20,
    maxWidth: 170
  },

  priceServiceText: {
    color: '#737380',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    marginRight: 10,
    marginLeft: 20
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
    backgroundColor: '#040404',
    borderRadius: 20,
    height: '100%',
    width: '100%',
    padding: 30,
    alignItems: 'center',
  },

  modalButtons: {
    position: 'absolute',
    bottom: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },

  openButton: {
    borderRadius: 20,
    padding: 12,
    paddingLeft: 30,
    paddingRight: 30,
    elevation: 2,
  },

  jumpButton: {
    marginTop: 15
  },

  jumpButtonText: {
    color: '#737380',
    fontFamily: 'Roboto_400Regular',
    fontSize: 16
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

  modalImageButton: {
    width: 200,
    height: 200,
    borderRadius: 180,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#737373'
  },

  modalImageIcon: {
    backgroundColor: '#F1F1F1',
    padding: 10,
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 0
  },

  modalImage: {
    width: 200,
    height: 200,
    borderRadius: 180,
  },

  modalText: {
    fontFamily: 'Roboto_500Medium',
    lineHeight: 24,
    fontSize: 15,
    color: '#737380',
    textAlign: 'center'
  }

});