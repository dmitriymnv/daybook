import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Axios from 'axios';

import { title, textError } from '../../../constants/Style';
import DefaultButton from '../../button/Default';
import { apiServer } from '../../../core/constants';
import Validation from '../../common/Validation';
import InputLabel from '../../common/InputLabel';

interface SignInFormProps {
  submit: ({ email }: { email: string }) => any;
}

class SignInForm extends Component<SignInFormProps> {
  state = {
    data: {
      email: ''
    },
    error: '',
    formValid: false,
    loading: false
  };
  render() {
    const {
      data: { email },
      error,
      formValid,
      loading
    } = this.state;
    if (!loading) {
      return (
        <View>
          <InputLabel
            title="Ваша электронная почта"
            error={error}
            input={{
              value: email,
              keyboardType: 'email-address',
              onChangeText: this.onChange
            }}
          />
          <DefaultButton
            onPress={this.onPress}
            text={'Далее'}
            disabled={!formValid}
          />
        </View>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }

  onPress = async () => {
    this.setState({ loading: true });

    const {
      data: { email }
    } = this.state;

    await Axios.post(`${apiServer}/auth/emailCheck`, {
      data: { email }
    }).then(({ data }: { data: { email: boolean } }) => {
      if (data.email) {
        this.props.submit({ email });
      } else if (!data.email) {
        this.setState({ error: 'Электронная почта не найдена' });
      }
    });

    this.setState({ loading: false });
  };

  onChange = (value: string) => {
    this.setState(
      {
        data: {
          email: value
        }
      },
      () => this.validation()
    );
  };

  validation() {
    const { email } = this.state.data;

    const setStateError = (error: string | boolean) => {
      this.setState(
        {
          error
        },
        () => this.validateForm()
      );
    };

    Validation({ value: email, type: 'email', setStateError });
  }

  validateForm() {
    const {
      data: { email },
      error
    } = this.state;

    if (!email.length) {
      this.setState({
        formValid: false
      });
    } else {
      this.setState({
        formValid: !error
      });
    }
  }
}

const styles = StyleSheet.create({
  title,
  textError: {
    ...textError,
    marginBottom: 10
  }
});

export default SignInForm;
