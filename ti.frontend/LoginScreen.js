import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import * as Google from 'expo-google-app-auth';
import * as Font from 'expo-font';
import AppButton from './AppButton'
import FormTextInput from './FormTextInput'
import colors from "./colors"

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

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    fontSize: 100,
    fontFamily: "futura-pt-light",
  }, 
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
  form: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%"
  },
  logo: {
    flex: 1,
    textAlignVertical: 'center'
  },
  google_button: {
    backgroundColor: "#FFFFFF",
  }
})

export default class LoginScreen extends Component {

  state = {
    fontLoaded: false,
    email: "",
    password: ""
  }

  constructor(props){
    super(props);
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  async componentDidMount() {
    await Font.loadAsync({
      'futura-pt-light': require('./assets/fonts/futura-pt-light.otf'),
    });

    this.setState({fontLoaded: true})
  }

  handleEmailChange(email){
    this.setState({ email: email });
  };

  handlePasswordChange(password){
    this.setState({ password: password });
  };

  handleLoginPress(){
    console.log("Login button pressed");
  };

	render(){
	  return (
	    <View style={styles.container}>
        {this.state.fontLoaded ? 
        (<Text style={[styles.text, styles.logo]}>Ti</Text>) :
        null
        }
        <View style={styles.form}>
          <FormTextInput 
            value={this.state.email} 
            onChangeText={this.handleEmailChange} 
            placeholder="Email" />
          <FormTextInput 
            value={this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder="Password"/>

           <TouchableOpacity style={[styles.container, this.props.style]} onPress={signInWithGoogleAsync}>
            <Image
              source={require('./assets/google-signin-button.png')}
            />
          </TouchableOpacity>
          <AppButton label="Log In" onPress={this.handleLoginPress} />
         </View>
	    </View>
	  );
	}
}

