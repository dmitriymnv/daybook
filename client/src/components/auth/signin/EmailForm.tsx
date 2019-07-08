import React from 'react';

import InputLabel from '../../common/InputLabel';
import Form from '../../common/Form';

interface EmailFormProps {
  data: {
    email: string;
  };
  errors: {
    email: string;
  };
  onChange: (type: string) => undefined;
}

const EmailForm = ({ data, errors, onChange }: EmailFormProps) => {
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
