import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import SignUpForm from '../../../components/auth/signup/SignUpForm';

class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20
  }
});

export default SignUpScreen;
