import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

import InputLabel from '../../common/InputLabel';
import { tintColor } from '../../../constants/Colors';
import Form from '../../common/Form';

const SignUpForm = ({ data, errors, onChange }: any) => {
  return (
    <View>
      <InputLabel
        title="Ваша электронная почта"
        error={errors.email}
        input={{
          value: data.email,
          keyboardType: 'email-address',
          onChangeText: onChange('email')
        }}
      />
      <InputLabel
        title="Придумайте пароль"
        error={errors.password}
        input={{
          value: data.password,
          keyboardType: 'default',
          secureTextEntry: true,
          onChangeText: onChange('password')
        }}
      />
      <InputLabel
        title="Повторите пароль"
        error={errors.confirmPassword}
        input={{
          value: data.confirmPassword,
          keyboardType: 'default',
          onChangeText: onChange('confirmPassword')
        }}
      />
      <CheckBox
        checked={data.userAgreement}
        onPress={() => {
          onChange('userAgreement')(!data.userAgreement);
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
    </View>
  );
};

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
