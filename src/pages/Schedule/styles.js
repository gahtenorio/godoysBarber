import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
  },

  schedules: {
    marginHorizontal: 5
  },

  scheduleContainer: {
    borderWidth: 1,
    borderColor: '#808080',
    marginTop: 15,
    marginBottom: 10,
    borderRadius: 10,
    padding: 15,
    borderTopWidth: 5,
    justifyContent: 'center'
  },

  status: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
    fontFamily: 'Ubuntu_700Bold',
  },

  service: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  serviceDate: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  serviceText: {
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
    color: '#FFF'
  },

  dateService: {
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
    color: '#FFF',
    backgroundColor: '#D2691E',
    padding: 10,
    borderRadius: 8
  }

});