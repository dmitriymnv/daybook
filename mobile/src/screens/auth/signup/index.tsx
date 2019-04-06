import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SignUpScreen extends Component {
  static navigationOptions = () => ({
    title: 'Регистрация'
  });

  render() {
    return (
      <View>
        <Text>Регистрация</Text>
      </View>
    );
  }
}

export default SignUpScreen;
