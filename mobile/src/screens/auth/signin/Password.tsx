import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import PasswordForm from '../../../components/auth/signin/PasswordForm';

interface SignInScreenProps {
  navigation: NavigationScreenProp<any>;
}

class SignInScreen extends Component<SignInScreenProps> {
  render() {
    const {
      navigation: {
        state: {
          params: { email }
        }
      }
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.head} />

        <View style={styles.body}>
          <PasswordForm submit={this.onSubmit} email={email} />
        </View>
      </View>
    );
  }

  onSubmit = (data: object) => {
    console.log(data);
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
