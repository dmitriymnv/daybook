import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
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
      navigation: { navigate }
    } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <ButtonWithountBackground
            text={'Регистрация'}
            onPress={() => navigate('SignUp')}
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
      console.log(data, error);
      if (!!error) {
        throw error;
      } else {
        this.props.navigation.navigate('Password', { email });
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
  },
  buttonSignup: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 15
  }
});

export default SignInScreen;
