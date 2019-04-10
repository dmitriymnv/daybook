import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import Axios from 'axios';

import Input from '../../common/Input';
import { title, textError } from '../../../constants/Style';
import DefaultButton from '../../button/Default';
import { apiServer } from '../../../core/constants';
import Validation from '../../common/Validation';

interface SignInFormProps {
  submit: ({ email }: { email: string }) => any;
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
          <View>
            <Input
              value={email}
              keyboardType="email-address"
              onChangeText={this.onChange('email')}
            />
            {!!error && <Text style={styles.textError}>{error}</Text>}
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

    const {
      data: { email }
    } = this.state;

    const validation = Validation({
      value: email,
      type: 'email',
      setStateError: (error: string) => {
        this.setState({
          error
        });
      }
    });

    if (validation) {
      await Axios.post(`${apiServer}/auth/emailCheck`, {
        data: { email }
      }).then(({ data }: { data: { email: boolean } }) => {
        if (data.email) {
          this.props.submit({ email });
        } else if (!data.email) {
          this.setState({ error: 'Электронная почта не найдена' });
        }
      });
    }

    this.setState({ loading: false });
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
