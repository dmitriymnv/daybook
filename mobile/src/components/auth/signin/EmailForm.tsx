import React from 'react';

import InputLabel from '../../common/InputLabel';
import Form from '../../common/Form';

const EmailForm = ({ data, errors, onChange }: any) => {
  return (
    <InputLabel
      title="Ваша электронная почта"
      error={errors.email}
      input={{
        value: data.email,
        keyboardType: 'email-address',
        onChangeText: onChange('email')
      }}
    />
  );
};

export default Form({
  WrappedComponent: EmailForm,
  fields: {
    email: ''
  },
  errors: {
    email: ''
  },
  buttonText: 'Далее'
});
