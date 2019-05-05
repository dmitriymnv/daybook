import React, { Component } from 'react';
import Axios from 'axios';
import { View } from 'react-native';
import {
  NavigationScreenProp,
  StackActions,
  NavigationActions
} from 'react-navigation';
import { connect } from 'react-redux';

import PasswordForm from '../../../components/auth/signin/PasswordForm';
import { apiServer } from '../../../core/constants';
import { SignIn } from '../../../core/sagas/auth';
import { styles as EmailStyles } from './Email';

interface SignInScreenProps {
  navigation: NavigationScreenProp<any>;
  SignIn: (
    toDecodeToken: string
  ) => { type: string; payload: { toDecodeToken: string } };
}

class SignInScreen extends Component<SignInScreenProps> {
  render() {
    return (
      <View style={EmailStyles.container}>
        <View style={EmailStyles.head} />

        <View style={EmailStyles.body}>
          <PasswordForm onSubmit={this.onSubmit} />
        </View>
      </View>
    );
  }

  onSubmit = async ({ password }: { password?: string }) => {
    const email: string = this.props.navigation.getParam('email');

    await Axios.post(`${apiServer}/auth/signin`, {
      data: {
        email,
        password
      }
    }).then(({ data: { data, error } }) => {
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

export default connect(
  state => ({}),
  { SignIn }
)(SignInScreen);
