import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404'
  },

  profileContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 100
  },

  imageContainer: {
    width: 200,
    height: 200,
    borderRadius: 180,
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#737373'
  },

  imageIcon: {
    backgroundColor: '#F1F1F1',
    padding: 10,
    borderRadius: 180,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    right: 0
  },

  description: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Ubuntu_700Bold',
  },

  dataContainer: {
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30
  },

  title: {
    fontSize: 18,
    fontFamily: 'Roboto_700Bold',
    color: '#737380'
  },

  data: {
    marginLeft: 10,
    fontSize: 18,
    fontFamily: 'Ubuntu_700Bold',
    color: '#737380'
  },

  buttonContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 50
  },

  saveButton: {
    backgroundColor: '#D2691E',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7
  },

  saveButtonText: {
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


});