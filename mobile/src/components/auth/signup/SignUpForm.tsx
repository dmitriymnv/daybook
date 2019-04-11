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
    loading: false
  };

  render() {
    const {
      data: { email, password, confirmPassword },
      userAgreement,
      errors,
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
          <View style={styles.userAgreement}>
            <CheckBox
              value={userAgreement}
              onChange={this.onChange('userAgreement')}
              onValueChange={() => this.validation('userAgreement')}
            />
            <Text>
              Я принимаю условия Пользовательского соглашения и даю своё
              согласие Яндексу на обработку моей персональной информации на
              условиях, определенных Политикой конфиденциальности.
            </Text>
          </View>

          <DefaultButton onPress={this.onPress} text={'Зарегистрироваться'} />
        </View>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }

  onPress = () => {
    this.setState({ loading: true });
  };

  validation = (field: any) => {
    const { data, userAgreement } = this.state;

    const setStateError = (error: string | boolean, type: string) => {
      this.setState({
        errors: {
          ...this.state.errors,
          [type]: error
        }
      });
    };

    if (field === 'userAgreement') {
      Validation({ value: !userAgreement, type: field, setStateError });
    } else {
      Validation({ value: data, type: field, setStateError });
    }

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
  },
  userAgreement: {
    flexDirection: 'row',
    marginBottom: 20
  }
});

export default SignUpForm;
