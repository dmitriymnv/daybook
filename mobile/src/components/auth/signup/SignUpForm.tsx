import React, { Component, createRef, RefObject } from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

import InputLabel from '../../common/InputLabel';
import { main as mainColor } from '../../../constants/Colors';
import Form from '../../common/Form';

interface SignUpFormProps {
  data: {
    email: string;
    password: string;
    confirmPassword: string;
    userAgreement: boolean;
  };
  errors: {
    email: string;
    password: string;
    confirmPassword: string;
    userAgreement: boolean;
  };
  onChange: (type: string) => any;
}

class SignUpForm extends Component<SignUpFormProps> {
  passwordRef: RefObject<any>;
  confirmPasswordRef: RefObject<any>;

  constructor(props: any) {
    super(props);

    this.passwordRef = createRef();
    this.confirmPasswordRef = createRef();
  }

  render() {
    const { data, errors, onChange } = this.props;
    return (
      <View>
        <InputLabel
          title="Ваша электронная почта"
          error={errors.email}
          input={{
            value: data.email,
            keyboardType: 'email-address',
            onChangeText: onChange('email'),
            onSubmitEditing: () => this.passwordRef.current.focus()
          }}
        />
        <InputLabel
          title="Придумайте пароль"
          error={errors.password}
          input={{
            value: data.password,
            keyboardType: 'default',
            secureTextEntry: true,
            onChangeText: onChange('password'),
            ref: this.passwordRef,
            onSubmitEditing: () => this.confirmPasswordRef.current.focus()
          }}
        />
        <InputLabel
          title="Повторите пароль"
          error={errors.confirmPassword}
          input={{
            value: data.confirmPassword,
            keyboardType: 'default',
            secureTextEntry: true,
            onChangeText: onChange('confirmPassword'),
            ref: this.confirmPasswordRef
          }}
        />
        <CheckBox
          checked={data.userAgreement}
          onPress={() => onChange('userAgreement')(!data.userAgreement)}
          title="Я принимаю условия Пользовательского соглашения и даю своё
            согласие DayBook на обработку моей персональной информации на
            условиях, определенных Политикой конфиденциальности."
          containerStyle={styles.userAgreement}
          checkedColor={mainColor}
          textStyle={{
            fontWeight: '300'
          }}
        />
      </View>
    );
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

export default Form({
  WrappedComponent: SignUpForm,
  fields: {
    email: '',
    password: '',
    confirmPassword: '',
    userAgreement: true
  },
  errors: {
    email: '',
    password: '',
    confirmPassword: '',
    userAgreement: false
  },
  buttonText: 'Зарегистрироваться'
});
