import { createStackNavigator } from 'react-navigation';

import SignInEmailScreen from '../auth/signin/Email';
import SigninPasswordScreen from '../auth/signin/Password';
import SignUpFirstScreen from '../auth/signup';

export const SignInStack = createStackNavigator(
  {
    Email: {
      screen: SignInEmailScreen,
      navigationOptions: () => ({
        header: null
      })
    },
    Password: {
      screen: SigninPasswordScreen,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: 'Email',
    mode: 'modal'
  }
);

export const SignUpStack = createStackNavigator({
  First: {
    screen: SignUpFirstScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});
