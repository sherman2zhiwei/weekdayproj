import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-google-app-auth';
import LoginScreen from './LoginScreen'

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
