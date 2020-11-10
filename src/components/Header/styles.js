import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  notification: {
    height: 12,
    width: 12,
    borderRadius: 180,
    backgroundColor: 'red',
    position: 'absolute',
    right: 0
  }
});