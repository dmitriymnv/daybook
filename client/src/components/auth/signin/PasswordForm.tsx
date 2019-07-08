import React from 'react';

import InputLabel from '../../common/InputLabel';
import Form from '../../common/Form';

interface PasswordFormProps {
  data: {
    password: string;
  };
  errors: {
    password: string;
  };
  onChange: (type: string) => undefined;
}

const PasswordForm = ({ data, errors, onChange }: PasswordFormProps) => {
  return (
    <InputLabel
      title="Ваш пароль"
      error={errors.password}
      input={{
        value: data.password,
        keyboardType: 'default',
        secureTextEntry: true,
        onChangeText: onChange('password'),
        autoFocus: true
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
