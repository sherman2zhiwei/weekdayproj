import * as React from "react";
import {StyleSheet, Text, TouchableOpacity } from "react-native"
import colors from "./colors"
import * as Font from 'expo-font';


class AppButton extends React.Component {
  state ={
    fontLoaded: false
  }
  async componentDidMount() {
    await Font.loadAsync({
      'roboto-medium': require('./assets/fonts/Roboto-Medium.ttf'),
    });

    this.setState({fontLoaded: true})
  }

	render() {
		return (

        <TouchableOpacity style={[styles.container, this.props.style]} onPress={this.props.onPress}>
          {this.state.fontLoaded ? 
          (<Text style={styles.text}>{this.props.label}</Text>):
          null }
        </TouchableOpacity>
		);
	}
}



const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.dark_accent,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(255,255,255,0.7)"
  },
  text: {
    color: colors.text,
    textAlign: "center",
    height: 20,
    fontFamily: "roboto-medium"
  }
});

export default AppButton;