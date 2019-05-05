import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import ButtonWithountBackground from '../../../components/button/WithountBackground';
import EmailForm from '../../../components/auth/signin/EmailForm';
import Axios from 'axios';
import { apiServer } from '../../../core/constants';

interface SignInScreenProps {
  navigation: NavigationScreenProp<Navigator>;
}

class SignInScreen extends Component<SignInScreenProps> {
  render() {
    const {
      navigation: { push }
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <ButtonWithountBackground
            text={'Регистрация'}
            onPress={() => push('SignUp')}
            style={styles.buttonSignup}
          />
        </View>

        <View style={styles.body}>
          <EmailForm onSubmit={this.onSubmit} />
        </View>
      </View>
    );
  }

  onSubmit = async ({ email }: { email?: string }) => {
    await Axios.post(`${apiServer}/auth/emailCheck`, {
      data: {
        email
      }
    }).then(({ data: { data, error } }) => {
      if (!!error) {
        throw error;
      } else {
        this.props.navigation.navigate('Password', { email });
      }
    });
  };
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  head: {
    flex: 1,
    alignItems: 'flex-end'
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    marginLeft: 20,
    marginRight: 20
  },
  buttonSignup: {
    padding: 20
  }
});

export default SignInScreen;
