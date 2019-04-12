import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import Axios from 'axios';

import { title, textError } from '../../../constants/Style';
import DefaultButton from '../../button/Default';
import { apiServer } from '../../../core/constants';
import Validation from '../../common/Validation';
import InputLabel from '../../common/InputLabel';

interface SignInFormProps {
  submit: (data: object) => any;
  email: string;
}

class SignInForm extends Component<SignInFormProps> {
  state = {
    data: {
      email: this.props.email,
      password: ''
    },
    error: '',
    formValid: false,
    loading: false
  };

  render() {
    const {
      data: { password },
      error,
      formValid,
      loading
    } = this.state;
    if (!loading) {
      return (
        <View>
          <InputLabel
            title="Ваш пароль"
            error={error}
            input={{
              value: password,
              keyboardType: 'default',
              secureTextEntry: true,
              onChangeText: this.onChange
            }}
          />
          <DefaultButton
            onPress={this.onPress}
            text={'Войти'}
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

    const { data } = this.state;
    await Axios.post(`${apiServer}/auth/signin`, {
      data
    })
      .then(({ data }) => {
        this.props.submit(data);
      })
      .catch(({ response: { status } }) => {
        if (status == 404) {
          this.setState({
            error: 'Проблема с доступом к интернету, попробуйте позже'
          });
        }
      });

    this.setState({ loading: false });
  };

  onChange = (value: string) => {
    this.setState(
      {
        data: {
          password: value
        }
      },
      () => this.validation()
    );
  };

  validation() {
    const { password } = this.state.data;

    const setStateError = (error: string | boolean) => {
      this.setState(
        {
          error
        },
        () => this.validateForm()
      );
    };
    Validation({ value: password, type: 'password', setStateError });
  }

  validateForm() {
    const {
      data: { password },
      error
    } = this.state;

    if (!password.length) {
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
