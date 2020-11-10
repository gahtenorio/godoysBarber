import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Ubuntu_700Bold, useFonts } from '@expo-google-fonts/ubuntu';
import AuthProvider from './src/Contexts/auth';
import BootAnimation from './src/animations/Boot';

console.disableYellowBox = true;

import Routes from './src/routes';

export default function App() {

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Ubuntu_700Bold
  });

  const [animation, setAnimation] = useState(false);

  setTimeout(() => {
    setAnimation(true);
  }, 3500);

  if (!fontsLoaded) {
    return <AppLoading />
  }

  if (!animation) {
    return <BootAnimation />
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
