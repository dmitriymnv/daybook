import React, { Component } from 'react';
import Axios from 'axios';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { connect } from 'react-redux';

import PasswordForm from '../../../components/auth/signin/PasswordForm';
import { apiServer } from '../../../core/constants';
import { SignIn } from '../../../core/sagas/auth';

interface SignInScreenProps {
  navigation: NavigationScreenProp<any>;
  SignIn: (
    toDecodeToken: string
  ) => { type: string; payload: { toDecodeToken: string } };
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
  //Задать типы
  onSubmit = async ({
    data: { password },
    setError
  }: {
    data: { password: string };
  }) => {
    const email = this.props.navigation.getParam('email');

    await Axios.post(`${apiServer}/auth/signin`, {
      data: {
        email,
        password
      }
    })
      .then(({ data: { data, error } }) => {
        if (!!error) {
          setError(error);
        } else {
          this.props.SignIn(data.token);
          this.props.navigation.navigate('Profile');
        }
      })
      .catch(error => {
        if (error.response) {
          setError({
            code: 404,
            error_code: 0,
            error_message:
              'Проблемы с доступном к серверу, обратитесь к нашей поддержке'
          });
        } else if (error.request) {
          console.warn(error.request);
        } else {
          console.warn('Error', error.message);
        }
      });
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

export default connect(
  state => ({}),
  { SignIn }
)(SignInScreen);
