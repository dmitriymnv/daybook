import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, CheckBox } from 'react-native';
import { isEmail, matches } from 'validator';

import { Input as InputStyle } from '../../../constants/Style';
import { title, textError } from '../../../constants/Style';

class SignUpForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    confirmPassword: '',
    userAgreement: true,
    errors: {
      email: '',
      password: '',
      confirmPassword: '',
      userAgreement: false
    },
    loading: false
  };

  render() {
    const {
      data: { email, password },
      confirmPassword,
      userAgreement,
      errors
    } = this.state;
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
            onBlur={() => this.validation('password')}
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
            onBlur={() => this.validation('confirmPassword')}
            style={InputStyle}
          />
          {!!errors.confirmPassword && (
            <Text style={styles.textError}>{errors.confirmPassword}</Text>
          )}
        </View>
        <View>
          <CheckBox
            value={userAgreement}
            onValueChange={this.onChange('userAgreement')}
          />
        </View>
      </View>
    );
  }

  validation = (field: string) => {
    const {
      data: { email, password },
      confirmPassword,
      userAgreement
    } = this.state;
    switch (field) {
      case 'email':
        const emailCheck = isEmail(email);
        if (emailCheck) {
          this.setState({
            errors: {
              ...this.state.errors,
              ['email']: ''
            }
          });
        } else {
          this.setState({
            errors: {
              ...this.state.errors,
              ['email']:
                'Укажите электронную почту в формате example@example.com'
            }
          });
        }
        break;
      case 'password':
        const passwordCheck = matches(
          password,
          /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/
        );
        if (passwordCheck) {
          this.setState({
            errors: {
              ...this.state.errors,
              ['password']: ''
            }
          });
        } else {
          this.setState({
            errors: {
              ...this.state.errors,
              ['password']:
                'Пароль должен содержать не менее восьми знаков, включать буквы, цифры и специальные символы'
            }
          });
        }
      case 'confirmPassword':
        const confirmPasswordCheck = password === confirmPassword;
        if (confirmPasswordCheck) {
          this.setState({
            errors: {
              ...this.state.errors,
              ['confirmPassword']: ''
            }
          });
        } else {
          this.setState({
            errors: {
              ...this.state.errors,
              ['confirmPassword']: 'Введёные пароли должны совпадать'
            }
          });
        }
        break;
      case 'userAgreement':
        if (userAgreement) {
          this.setState({
            errors: {
              ...this.state.errors,
              ['userAgreement']: true
            }
          });
        } else {
          this.setState({
            errors: {
              ...this.state.errors,
              ['userAgreement']: false
            }
          });
        }
      default:
        break;
    }
  };

  onChange = (type: string) => (value: string) => {
    if (type === 'confirmPassword') {
      this.setState({
        confirmPassword: value
      });
    } else if (type === 'userAgreement') {
      this.setState({
        userAgreement: !this.state.userAgreement
      });
    } else {
      this.setState({
        data: {
          ...this.state.data,
          [type]: value
        }
      });
    }
  };
}

const styles = StyleSheet.create({
  title,
  textError: {
    ...textError,
    marginBottom: 10
  }
});

export default SignUpForm;
