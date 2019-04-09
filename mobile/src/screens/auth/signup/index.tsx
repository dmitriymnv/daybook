import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SignUpScreen extends Component {
  static navigationOptions = () => ({
    title: 'Регистрация'
  });

  render() {
    return (
      <View>
        <Text>Email /signup-email</Text>
      </View>
    );
  }
}

export default SignUpScreen;
