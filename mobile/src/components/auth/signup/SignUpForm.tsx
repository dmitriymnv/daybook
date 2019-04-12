import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  CheckBox,
  ActivityIndicator
} from 'react-native';

import { Input as InputStyle } from '../../../constants/Style';
import { title, textError } from '../../../constants/Style';
import Validation from '../../common/Validation';
import DefaultButton from '../../button/Default';

class SignUpForm extends Component {
  state = {
    data: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    userAgreement: true,
    errors: {
      email: '',
      password: '',
      confirmPassword: '',
      userAgreement: false
    },
    formValid: false,
    loading: false
  };

  render() {
    const {
      data: { email, password, confirmPassword },
      userAgreement,
      errors,
      formValid,
      loading
    } = this.state;
    if (!loading) {
      return (
        <View>
          <View>
            <Text style={styles.title}>Ваша электронная почта</Text>
            <TextInput
              value={email}
              keyboardType="email-address"
              onChangeText={this.onChange('email')}
              onBlur={() => this.validation('email')}
              style={InputStyle}
            />
            {!!errors.email && (
              <Text style={styles.textError}>{errors.email}</Text>
            )}
          </View>
          <View>
            <Text style={styles.title}>Придумайте пароль</Text>
            <TextInput
              value={password}
              keyboardType="default"
              onChangeText={this.onChange('password')}
              style={InputStyle}
            />
            {!!errors.password && (
              <Text style={styles.textError}>{errors.password}</Text>
            )}
          </View>
          <View>
            <Text style={styles.title}>Повторите пароль</Text>
            <TextInput
              value={confirmPassword}
              keyboardType="default"
              onChangeText={this.onChange('confirmPassword')}
              style={InputStyle}
            />
            {!!errors.confirmPassword && (
              <Text style={styles.textError}>{errors.confirmPassword}</Text>
            )}
          </View>
          <View style={styles.userAgreement}>
            <CheckBox
              value={userAgreement}
              onChange={this.onChange('userAgreement')}
            />
            <Text>
              Я принимаю условия Пользовательского соглашения и даю своё
              согласие Яндексу на обработку моей персональной информации на
              условиях, определенных Политикой конфиденциальности.
            </Text>
          </View>

          <DefaultButton
            onPress={this.onPress}
            text={'Зарегистрироваться'}
            disabled={!formValid}
          />
        </View>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }

  onPress = () => {
    this.setState({ loading: true });
  };

  onChange = (type: string) => (value: string) => {
    if (type === 'userAgreement') {
      this.setState(
        {
          userAgreement: !this.state.userAgreement
        },
        () => this.validation(type)
      );
    } else {
      this.setState(
        {
          data: {
            ...this.state.data,
            [type]: value
          }
        },
        () => this.validation(type)
      );
    }
  };

  validation = (field: any) => {
    const { data, userAgreement } = this.state;

    const setStateError = (error: string | boolean, type: string) => {
      this.setState(
        {
          errors: {
            ...this.state.errors,
            [type]: error
          }
        },
        () => this.validateForm()
      );
    };

    if (field === 'userAgreement') {
      Validation({ value: userAgreement, type: field, setStateError });
    } else {
      Validation({ value: data, type: field, setStateError });
    }

    if (field === 'password') {
      Validation({ value: data, type: 'confirmPassword', setStateError });
    }
  };

  validateForm() {
    const { email: emailData, password: passwordData } = this.state.data;
    const {
      email,
      password,
      confirmPassword,
      userAgreement
    } = this.state.errors;
    if (emailData.length === 0 || passwordData.length === 0) {
      this.setState({
        formValid: false
      });
    } else {
      this.setState({
        formValid: !email && !password && !confirmPassword && !userAgreement
      });
    }
  }
}

const styles = StyleSheet.create({
  title,
  textError: {
    ...textError,
    marginBottom: 10
  },
  userAgreement: {
    flexDirection: 'row',
    marginBottom: 20
  }
});

export default SignUpForm;
