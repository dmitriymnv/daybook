import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Axios from 'axios';
import { isEmail } from 'validator';

import Input from '../../common/Input';
import { title, textError } from '../../../constants/Style';
import DefaultButton from '../../button/Default';
import { apiServer } from '../../../core/constants';

interface SignInFormProps {
  onPress: ({ email }: { email: string }) => any;
}

class SignInForm extends Component<SignInFormProps> {
  state = {
    data: {
      email: ''
    },
    error: '',
    loading: false
  };
  render() {
    const {
      data: { email },
      error,
      loading
    } = this.state;
    if (!loading) {
      return (
        <View>
          <Text style={styles.title}>Ваша электронная почта</Text>
          <View style={styles.body}>
            <Input
              value={email}
              keyboardType="email-address"
              onChangeText={this.onChange('email')}
            />
            <View style={styles.error}>
              <Text style={styles.textError}>{error}</Text>
            </View>
          </View>
          <DefaultButton onPress={this.onPress} text={'Далее'} />
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
      const {
        data: { email }
      } = this.state;

      await Axios.post(`${apiServer}/auth/emailCheck`, {
        data: { email }
      }).then(({ data }: { data: { email: boolean } }) => {
        if (data.email) {
          this.props.onPress({ email });
        } else if (!data.email) {
          this.setState({ error: 'Электронная почта не найдена' });
        }
      });
    }

    this.setState({ loading: false });
  };

  validation = () => {
    const {
      data: { email }
    } = this.state;
    let error = '';

    if (!isEmail(email)) {
      error = 'Укажите электронную почту в формате example@example.com';
    } else {
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
  body: {
    flexDirection: 'column'
  },
  error: {
    width: '100%',
    justifyContent: 'center',
    height: 35,
    marginBottom: 15
  },
  textError
});

export default SignInForm;
