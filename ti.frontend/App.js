import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Google from 'expo-google-app-auth';
import LoginScreen from './LoginScreen'
import colors from "./colors"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
}
