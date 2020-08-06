import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Login from '../pages/Login';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator

      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}
    >
      <AuthStack.Screen
        name='Login'
        component={Login}
      />

      <AuthStack.Screen
        name='SignIn'
        component={SignIn}
      />

      <AuthStack.Screen
        name='SignUp'
        component={SignUp}
      />

      <AuthStack.Screen
        name='ForgotPassword'
        component={ForgotPassword}
      />
    </AuthStack.Navigator >
  );
}