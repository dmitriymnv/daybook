import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { CheckBox } from 'react-native-elements';

import Validation from '../../common/Validation';
import DefaultButton from '../../button/Default';
import InputLabel from '../../common/InputLabel';
import { tintColor } from '../../../constants/Colors';
import { ResponseAPIError } from '../../../core/constants';
interface SignUpFormProps {
  onSubmit: ({
    email,
    password
  }: {
    email: string;
    password: string;
  }) => Promise<any>;
}

class SignUpForm extends Component<SignUpFormProps> {
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
          <InputLabel
            title="Ваша электронная почта"
            error={errors.email}
            input={{
              value: email,
              keyboardType: 'email-address',
              onChangeText: this.onChange('email')
            }}
          />
          <InputLabel
            title="Придумайте пароль"
            error={errors.password}
            input={{
              value: password,
              keyboardType: 'default',
              secureTextEntry: true,
              onChangeText: this.onChange('password')
            }}
          />
          <InputLabel
            title="Повторите пароль"
            error={errors.confirmPassword}
            input={{
              value: confirmPassword,
              keyboardType: 'default',
              onChangeText: this.onChange('confirmPassword')
            }}
          />
          <CheckBox
            checked={userAgreement}
            onPress={() => {
              this.setState(
                {
                  userAgreement: !userAgreement
                },
                () => this.validation('userAgreement')
              );
            }}
            title="Я принимаю условия Пользовательского соглашения и даю своё
            согласие DayBook на обработку моей персональной информации на
            условиях, определенных Политикой конфиденциальности."
            containerStyle={styles.userAgreement}
            checkedColor={tintColor}
            textStyle={{
              fontWeight: '300'
            }}
          />
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

    const { email, password } = this.state.data;

    this.props
      .onSubmit({ email, password })
      .catch(({ code, error_code, error_message }: ResponseAPIError) => {
        if (code === 400) {
          if (error_code === 1) {
            this.setState({
              errors: {
                ...this.state.errors,
                email: error_message
              }
            });
          }
        }
      });

    this.setState({ loading: false });
  };

  onChange = (
    type: 'userAgreement' | 'email' | 'password' | 'confirmPassword'
  ) => (value: string) => {
    this.setState(
      {
        data: {
          ...this.state.data,
          [type]: value
        }
      },
      () => this.validation(type)
    );
  };

  validation = (
    field: 'userAgreement' | 'email' | 'password' | 'confirmPassword'
  ) => {
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
  userAgreement: {
    marginLeft: 0,
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    marginBottom: 20
  }
});

export default SignUpForm;
