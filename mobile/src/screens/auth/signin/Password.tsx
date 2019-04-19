import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import PasswordForm from '../../../components/auth/signin/PasswordForm';

interface SignInScreenProps {
  navigation: NavigationScreenProp<any>;
}

class SignInScreen extends Component<SignInScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.head} />

        <View style={styles.body}>
          <PasswordForm onSubmit={this.onSubmit} />
        </View>
      </View>
    );
  }

  onSubmit = ({ data: { password } }: { data: { password: string } }) => {
    console.log(password);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  head: {
    flex: 1,
    alignItems: 'flex-end'
  },
  body: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 250
  }
});

export default SignInScreen;
