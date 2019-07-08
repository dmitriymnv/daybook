import { isEmail, matches } from 'validator';

interface ValidationProps {
  value: ValidationUsers;
  type: 'email' | 'password' | 'confirmPassword' | 'userAgreement';
  setStateError: (error: string | boolean, type: string) => any;
}

interface ValidationUsers {
  email?: string;
  password?: string;
  confirmPassword?: string;
  userAgreement?: boolean;
}

const Validation = ({
  value: { email = '', password = '', confirmPassword, userAgreement },
  type,
  setStateError
}: ValidationProps): void => {
  switch (type) {
    case 'email':
      isEmail(email)
        ? setStateError('', type)
        : setStateError(
            'Укажите электронную почту в формате example@example.com',
            type
          );
      break;

    case 'password':
      matches(
        password,
        /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/
      )
        ? setStateError('', type)
        : setStateError(
            'Пароль должен содержать не менее восьми знаков, включать буквы, цифры и специальные символы',
            type
          );
      break;

    case 'confirmPassword':
      password === confirmPassword
        ? setStateError('', type)
        : setStateError('Введёные пароли должны совпадать', type);
      break;

    case 'userAgreement':
      userAgreement ? setStateError(false, type) : setStateError(true, type);
      break;

    default:
      return undefined;
  }
};

export default Validation;
