import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';
import Axios from 'axios';

import SignUpForm from '../../../components/auth/signup/SignUpForm';
import { apiServer, ResponseAPIError } from '../../../core/constants';
import { SignIn } from '../../../core/sagas/auth';

interface SignUpScreenProps {
  SignIn: (data: object) => void;
  navigation: NavigationScreenProp<Navigator>;
}

interface ResponseAPISignUp {
  data: {
    data: {
      token: string;
    };
    error: ResponseAPIError;
  };
}

class SignUpScreen extends Component<SignUpScreenProps> {
  render() {
    return (
      <View style={styles.container}>
        <SignUpForm onSubmit={this.onSubmit} />
      </View>
    );
  }

  onSubmit = async ({ data: { email, password }, setError }: any) => {
    await Axios.post(`${apiServer}/auth/signup`, {
      data: { email, password }
    }).then(({ data: { data, error } }: ResponseAPISignUp) => {
      if (!!error) {
        setError(error);
      } else {
        this.props.SignIn(data);
        this.props.navigation.navigate('Profile');
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

export default connect(
  () => ({}),
  { SignIn }
)(SignUpScreen);
