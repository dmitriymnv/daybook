import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, CheckBox } from 'react-native';

import { Input as InputStyle } from '../../../constants/Style';
import { title, textError } from '../../../constants/Style';
import Validation from '../../common/Validation';

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
    loading: false
  };

  render() {
    const {
      data: { email, password, confirmPassword },
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

  validation = (field: any) => {
    const { data, userAgreement } = this.state;

    const setStateError = (errorText: string, type: string) => {
      this.setState({
        errors: {
          ...this.state.errors,
          [type]: errorText
        }
      });
    };

    Validation({ value: data, type: field, setStateError });

    if (field === 'password') {
      Validation({ value: data, type: 'confirmPassword', setStateError });
    }
  };

  onChange = (type: string) => (value: string) => {
    if (type === 'userAgreement') {
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
