import React from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import AuthProvider from './src/Contexts/auth';

console.disableYellowBox = true;

import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Ubuntu_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle="light-content" backgroundColor="#040404" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
