import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';
import * as Google from 'expo-google-app-auth';




async function signInWithGoogleAsync(){
  try {
    const config = {
      expoClientId: "",
      iosClientId: "1060561981131-5fp82r6tul3l7nardmt7ed1t71i43f0q.apps.googleusercontent.com",
      androidClientId: "1060561981131-10182gmn58ekeuorqu3pr6gqbkkj5bgo.apps.googleusercontent.com",
      iosStandaloneAppClientId: "",
      androidStandaloneAppClientId: "1060561981131-a8im70tqcv8qpch6o6qdip7tgf77qj3u.apps.googleusercontent.com",
    };

    const { type, accessToken } = await Google.logInAsync(config);

    if (type === 'success') {
      /* Log-Out */
      await Google.logOutAsync({ accessToken, ...config });
      /* `accessToken` is now invalid and cannot be used to get data from the Google API with HTTP requests */
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