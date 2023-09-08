import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SplashScreen } from 'expo';

export default function App() {
  SplashScreen.preventAutoHide(); // Prevent native splash screen from autohiding

  return (
    <View style={styles.container}>
      <Image source={require('./assets/splash.png')} onLoad={handleImageLoad} />
    </View>
  );
}

function handleImageLoad() {
  SplashScreen.hide(); // Hide native splash screen
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
