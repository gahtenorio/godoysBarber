import React from 'react';
import { SafeAreaView } from 'react-native';
import { Video } from 'expo-av';

import boot from './BootAnimation.mp4'

export default function Boot() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000' }}>
      <Video
        source={boot}
        rate={1.0}
        isMuted={true}
        resizeMode="contain"
        shouldPlay
        style={{ width: '100%', height: '100%', backgroundColor: '#040404' }}
      />
    </SafeAreaView>
  );
}