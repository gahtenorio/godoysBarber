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

  services: {

  },

  buttonContainer: {
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#191919',
    alignItems: 'center'
  },

  button: {
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#814B0F',
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
    marginRight: 20
  },

  detailService: {
    justifyContent: 'center',
  },

  nameServiceText: {
    color: '#FFF',
    fontFamily: 'Ubuntu_700Bold',
    fontSize: 18,
    marginBottom: 5
  },

  priceServiceText: {
    color: '#FFF',
    fontFamily: 'Roboto_500Medium',
    fontSize: 16
  },

});