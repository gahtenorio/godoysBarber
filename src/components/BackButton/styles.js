import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingTop: 0 + getStatusBarHeight(),
    paddingLeft: 15
  }
});