import React, { Component } from 'react';
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native';

import Input from '../../common/Input';
import { title, textError } from '../../../constants/Style';
import DefaultButton from '../../button/Default';

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
          <Text style={styles.title}>Логин</Text>
          <View>
            <Input value={email} onChangeText={this.onChange('email')} />
            <Text style={styles.error}>{error}</Text>
          </View>
          <DefaultButton onPress={this.onPress} text={'Далее'} />
        </View>
      );
    } else {
      return <ActivityIndicator size="large" />;
    }
  }

  onPress = () => {
    this.setState({ loading: true });
    const validation: string = this.validation();
    if (validation.length) {
      this.setState({ error: validation, loading: false });
    } else {
      this.props.onPress({ email: this.state.data.email });
    }
  };

  validation = () => {
    const {
      data: { email }
    } = this.state;
    let error = '';

    if (email.length < 3) {
      error = 'Слишком короткий логин';
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
  error: {
    ...textError,
    marginBottom: 15
  }
});

export default SignInForm;
