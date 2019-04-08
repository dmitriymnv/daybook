import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Axios from 'axios';
import { matches } from 'validator';

import Input from '../../common/Input';
import { title, textError } from '../../../constants/Style';
import DefaultButton from '../../button/Default';
import { apiServer } from '../../../core/constants';

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
    loading: false
  };

  render() {
    const {
      data: { password },
      error,
      loading
    } = this.state;
    if (!loading) {
      return (
        <View>
          <Text style={styles.title}>Ваша пароль</Text>
          <View>
            <Input
              value={password}
              onChangeText={this.onChange('password')}
              autoFocus={true}
              secureTextEntry={true}
            />
            {!!error && <Text style={styles.textError}>{error}</Text>}
          </View>
          <DefaultButton onPress={this.onPress} text={'Войти'} />
        </View>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }

  onPress = async () => {
    this.setState({ loading: true });
    const validation: string = this.validation();

    if (validation.length) {
      this.setState({ error: validation });
    } else {
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
    }

    this.setState({ loading: false });
  };

  validation = () => {
    const {
      data: { password }
    } = this.state;
    let error = '';

    if (
      !matches(
        password,
        /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/
      )
    ) {
      error = 'Пароль указан в неверном формате!';
    }

    return error;
  };

  onChange = (type: string) => (value: string) => {
    this.setState({
      data: {
        ...this.state.data,
        [type]: value
      }
    });
  };
}

const styles = StyleSheet.create({
  title,
  textError: {
    ...textError,
    marginBottom: 10
  }
});

export default SignInForm;
