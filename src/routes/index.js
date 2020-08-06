import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/auth';
import { ActivityIndicator, View } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

export default function Routes() {

  const { signed, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#040404' }}>
        <ActivityIndicator size='large' color='#FFF' />
      </View>
    );
  }

  return (
    signed ? <AppRoutes /> : <AuthRoutes />
  );
}