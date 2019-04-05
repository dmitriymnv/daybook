import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainNavigator';
import SignUpScreen from '../screens/SignUpScreen';
import SignInScreen from '../screens/SignInScreen';
import ProfileScreen from '../screens/ProfileScreen';

export default createAppContainer(
  createStackNavigator({
    Main: {
      screen: MainTabNavigator,
      navigationOptions: {
        header: null
      }
    },
    Signup: {
      screen: SignUpScreen
    },
    Signin: {
      screen: SignInScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  })
);
