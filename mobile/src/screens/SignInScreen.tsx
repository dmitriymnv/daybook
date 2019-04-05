import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SignInScreen extends Component {
  static navigationOptions = () => ({
    title: 'Авторизация'
  });

  render() {
    return (
      <View>
        <Text>Авторизация</Text>
      </View>
    );
  }
}

export default SignInScreen;
