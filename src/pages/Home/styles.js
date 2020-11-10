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
    padding: 25,
    alignItems: 'center'
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

});