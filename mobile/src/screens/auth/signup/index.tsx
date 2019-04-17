import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Axios from 'axios';

import SignUpForm from '../../../components/auth/signup/SignUpForm';
import { apiServer, ResponseAPIError } from '../../../core/constants';

interface ResponseAPISignUp {
  data: {
    data: {
      token: string;
    };
    error: ResponseAPIError;
  };
}

class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm onSubmit={this.onSubmit} />
      </View>
    );
  }

  onSubmit = async ({
    email,
    password
  }: {
    email: string;
    password: string;
  }) => {
    await Axios.post(`${apiServer}/auth/signup`, {
      data: { email, password }
    }).then(({ data: { data, error } }: ResponseAPISignUp) => {
      if (!!error) {
        throw error;
      } else {
        console.log('Регистрация успешна', data);
      }
    });
  };
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20
  }
});

export default SignUpScreen;
