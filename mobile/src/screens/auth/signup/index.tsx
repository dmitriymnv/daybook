import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  NavigationScreenProp,
  StackActions,
  NavigationActions
} from 'react-navigation';
import { connect } from 'react-redux';
import Axios from 'axios';

import SignUpForm from '../../../components/auth/signup/SignUpForm';
import { apiServer, ResponseAPIError } from '../../../core/constants';
import { SignIn } from '../../../core/sagas/auth';

interface SignUpScreenProps {
  SignIn: (token: string) => void;
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

  onSubmit = async ({
    email,
    password
  }: {
    email?: string;
    password?: string;
  }) => {
    await Axios.post(`${apiServer}/auth/signup`, {
      data: { email, password }
    }).then(({ data: { data, error } }: ResponseAPISignUp) => {
      if (!!error) {
        throw error;
      } else {
        this.props.SignIn(data.token);
        this.props.navigation.dispatch(
          StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Main' })]
          })
        );
      }
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20
  }
});

export default connect(
  () => ({}),
  { SignIn }
)(SignUpScreen);
