import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';



export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'weekdayproj',
    headerStyle:{
      backgroundColor: '#1c1259'
    },
    headerTintColor: '#fcd307',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontFamily: 'sans-serif-condensed'
    }
  }

  constructor(props){
    super(props);
    this.state = {
      name: "",
      email: "",
      password: ""
    }
  }

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({name: text})}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({email: text})}
        placeholder="E-Mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({password:text})}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Button
        onPress={()=> navigate('Profile', {name : 'Jane'})}
        title="Submit"
        color="#fcd307"
      />
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