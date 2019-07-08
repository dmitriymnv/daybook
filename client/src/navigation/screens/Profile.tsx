import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SignInScreen extends Component {
  static navigationOptions = () => ({
    title: 'Профиль'
  });

  render() {
    return (
      <View>
        <Text>Профиль пользователя</Text>
      </View>
    );
  }
}

export default SignInScreen;
