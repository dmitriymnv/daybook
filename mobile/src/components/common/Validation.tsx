import { isEmail, matches } from 'validator';

interface validationUsers {
  email: string;
  password: string;
  confirmPassword: string;
}

interface validationProps {
  value: string | validationUsers;
  type: 'email' | 'password' | 'confirmPassword';
  setStateError: (errorText: string, type: string) => any;
}

const validation = ({
  value,
  type,
  setStateError
}: validationProps): boolean | undefined => {
  const typeValueString = typeof value == 'string';
  switch (type) {
    case 'email':
      const emailCheck = isEmail(typeValueString ? value : value.email);
      emailCheck
        ? setStateError('', type)
        : setStateError(
            'Укажите электронную почту в формате example@example.com',
            type
          );
      return emailCheck;

    case 'password':
      const valueMax = typeValueString ? value : value.password;
      const passwordCheck =
        !valueMax.match(/\s/) &&
        matches(
          valueMax,
          /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/
        );
      passwordCheck
        ? setStateError('', type)
        : setStateError(
            'Пароль должен содержать не менее восьми знаков, включать буквы, цифры и специальные символы',
            type
          );

      return passwordCheck;

    case 'confirmPassword':
      const confirmPasswordCheck = value.password === value.confirmPassword;
      confirmPasswordCheck
        ? setStateError('', type)
        : setStateError('Введёные пароли должны совпадать', type);
      return confirmPasswordCheck;

    default:
      return undefined;
  }
};

export default validation;
