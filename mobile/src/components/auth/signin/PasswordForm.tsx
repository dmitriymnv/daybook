import React from 'react';

import InputLabel from '../../common/InputLabel';
import Form from '../../common/Form';

const PasswordForm = ({ data, errors, onChange }: any) => {
  return (
    <InputLabel
      title="Ваш пароль"
      error={errors.password}
      input={{
        value: data.password,
        keyboardType: 'default',
        secureTextEntry: true,
        onChangeText: onChange('password')
      }}
    />
  );
};

export default Form({
  WrappedComponent: PasswordForm,
  fields: {
    password: ''
  },
  errors: {
    password: ''
  },
  buttonText: 'Авторизоваться'
});
