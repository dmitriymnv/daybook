import React, { Component } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

import Validation from './Validation';
import DefaultButton from '../button/Default';
import { ResponseAPIError } from '../../core/constants';
import { textError } from '../../constants/Style';

interface FormProps {
  WrappedComponent: any;
  fields: {
    email?: string;
    password?: string;
    confirmPassword?: string;
    userAgreement?: boolean;
  };
  errors: {
    email?: string;
    password?: string;
    confirmPassword?: string;
    userAgreement?: boolean;
  };
  buttonText: string;
}

interface FormHOCProps {
  onSubmit: ({
    email,
    password
  }: {
    email?: string;
    password?: string;
  }) => Promise<void>;
}

const Form = ({ WrappedComponent, fields, errors, buttonText }: FormProps) => {
  return class extends Component<FormHOCProps> {
    state = {
      data: {
        ...fields
      },
      errors: {
        ...errors,
        global: ''
      },
      formValid: false,
      loading: false
    };

    render() {
      const { data, formValid, loading, errors } = this.state;
      if (loading) {
        return <ActivityIndicator size="large" />;
      } else {
        return (
          <View>
            {!!errors.global && (
              <Text style={styles.error}>{errors.global}</Text>
            )}
            <WrappedComponent
              {...this.props}
              data={data}
              errors={errors}
              onChange={this.onChange}
            />
            <DefaultButton
              onPress={this.onPress}
              text={buttonText}
              disabled={!formValid}
            />
          </View>
        );
      }
    }

    onPress = () => {
      this.setState({ loading: true });

      this.props
        .onSubmit(this.state.data)
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
      const { data } = this.state;

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

      Validation({ value: data, type: field, setStateError });

      setTimeout(() => {
        if (field === 'password' && typeof data.confirmPassword === 'string') {
          Validation({ value: data, type: 'confirmPassword', setStateError });
        }
      }, 10);
    };

    validateForm() {
      const { data } = this.state;
      const {
        email,
        password,
        confirmPassword,
        userAgreement
      } = this.state.errors;
      if (
        (typeof data.email === 'string' && data.email.length === 0) ||
        (typeof data.password === 'string' && data.password.length === 0)
      ) {
        this.setState({
          formValid: false
        });
      } else {
        this.setState({
          formValid: !email && !password && !confirmPassword && !userAgreement
        });
      }
    }
  };
};

const styles = StyleSheet.create({
  error: {
    ...textError,
    marginBottom: 10
  }
});

export default Form;
