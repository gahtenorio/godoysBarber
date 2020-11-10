import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919'
  },

  flatContainer: {
    marginHorizontal: 5,
    marginBottom: 10,
  },

  productsContainer: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#808080',
    marginTop: 20,
  },

  product: {
    flexDirection: 'row'
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 10,
    backgroundColor: '#737373',
  },

  name: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Ubuntu_700Bold',
    margin: 20,
    maxWidth: 210
  },

  price: {
    color: '#737380',
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
    marginLeft: 20
  }
});