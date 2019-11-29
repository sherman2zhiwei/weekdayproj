import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class ProfileScreen extends Component {

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>FAK</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: 250,
    margin: 5
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});