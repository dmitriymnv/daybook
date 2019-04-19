import React, { Component, StatelessComponent } from 'react';
import { View, ActivityIndicator } from 'react-native';

import Validation from './Validation';
import DefaultButton from '../button/Default';
import { ResponseAPIError } from '../../core/constants';

interface FormProps {
  WrappedComponent: StatelessComponent;
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
    data,
    setError
  }: {
    data: { email?: string; password?: string };
    setError?: ({ code, error_message, error_code }: ResponseAPIError) => void;
  }) => void;
}

const Form = ({ WrappedComponent, fields, errors, buttonText }: FormProps) => {
  return class extends Component<FormHOCProps> {
    state = {
      data: {
        ...fields
      },
      errors: {
        ...errors
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
            <WrappedComponent
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

      this.props.onSubmit({
        data: this.state.data,
        setError: ({ code, error_code, error_message }: ResponseAPIError) => {
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
          this.setState({ loading: false });
        }
      });
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

      if (field === 'password' && typeof data.confirmPassword === 'string') {
        Validation({ value: data, type: 'confirmPassword', setStateError });
      }
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

export default Form;
