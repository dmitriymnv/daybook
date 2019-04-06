import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainNavigator';
import SignInEmailScreen from '../screens/auth/signin/Email';
import SigninPasswordScreen from '../screens/auth/signin/Password';
import ProfileScreen from '../screens/ProfileScreen';

const SigninStack = createStackNavigator(
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
    initialRouteName: 'Email'
  }
);

export default createAppContainer(
  createStackNavigator({
    Main: {
      screen: MainTabNavigator,
      navigationOptions: () => ({
        header: null
      })
    },
    Signin: {
      screen: SigninStack,
      navigationOptions: () => ({
        title: 'Авторизация'
      })
    },
    Profile: {
      screen: ProfileScreen
    }
  })
);
