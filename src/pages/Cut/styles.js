import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919'
  },

  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    marginBottom: 30
  },

  buttonContainer: {
    position: 'absolute',
    bottom: 50
  },

  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D2691E',
    borderRadius: 10,
    marginLeft: 20,
    padding: 8
  },

  buttonText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#FFF',
    fontFamily: 'Roboto_700Bold'
  }
});