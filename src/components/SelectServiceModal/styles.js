import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  modalArea: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0, 0.5)',
    justifyContent: 'flex-end'
  },

  modalBody: {
    backgroundColor: '#D2691E',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    minHeight: 300,
    paddingTop: 10,
    paddingRight: 20,
    paddingLeft: 20,
    paddingBottom: 40
  },

  modalItem: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    marginBottom: 15,
    padding: 20
  },

  serviceInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  serviceName: {
    color: '#000',
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
  },

  servicePrice: {
    color: '#000',
    fontFamily: 'Roboto_700Bold',
    fontSize: 16,
  },

  finishButton: {
    height: 60,
    backgroundColor: '#814B0F',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  finishButtonText: {
    color: '#FFF',
    fontSize: 17,
    fontFamily: 'Roboto_700Bold'
  },

  dateInfo: {
    flexDirection: 'row'
  },

  datePrevArea: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 5
  },

  dateTitleArea: {
    width: 140,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5
  },

  dateTitle: {
    color: '#040404',
    fontSize: 17,
    fontFamily: 'Ubuntu_700Bold'
  },

  dateNextArea: {
    flex: 1,
    justifyContent: 'flex-start',
    marginBottom: 5
  },

  dateItem: {
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingTop: 5,
    paddingBottom: 5
  },

  dateItemWeekDay: {
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
  },

  dateItemNumber: {
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
  },

  timeItem: {
    width: 75,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  timeItemText: {
    fontSize: 16,
    fontFamily: 'Roboto_700Bold',
  },

  input: {
    fontSize: 16,
    fontFamily: 'Roboto_700Bold'
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
    backgroundColor: '#040404',
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