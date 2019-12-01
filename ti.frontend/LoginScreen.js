import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';

async function signInWithGoogleAsync(){
  try {
    const result = await Google.logInAsync({
      androidClientId: "1060561981131-10182gmn58ekeuorqu3pr6gqbkkj5bgo.apps.googleusercontent.com",
      iosClientId: "1060561981131-5fp82r6tul3l7nardmt7ed1t71i43f0q.apps.googleusercontent.com",
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

export default class LoginScreen extends Component {
	render(){
	  return (
	    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
	      <Text>Hello, world!</Text>
	      <Button
	        title="Login" onPress={signInWithGoogleAsync}/>
	    </View>
	  );
	}
}