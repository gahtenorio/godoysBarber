import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040404'
  },

  image: {
    width: '100%',
    height: 400,
    maxWidth: '100%',
    marginTop: 80
  },

  detailContainer: {
    marginHorizontal: 20
  },

  priceAndButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15
  },

  price: {
    color: '#737380',
    fontSize: 20,
    fontFamily: 'Roboto_700Bold',

  },

  button: {
    backgroundColor: '#D2691E',
    borderRadius: 10
  },

  buttonText: {
    fontSize: 16,
    padding: 10,
    color: '#FFF',
    fontFamily: 'Roboto_700Bold'
  },

  detail: {
    color: '#FFF',
    fontSize: 18,
    fontFamily: 'Roboto_500Medium',
    lineHeight: 26,
    marginTop: 30,
    marginBottom: 20
  },


});