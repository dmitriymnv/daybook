import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import CategoriesPublishersScreen from '../screens/CategoriesPublishersScreen';
import JournalScreen from '../screens/JournalScreen';
import SignInScreen from '../screens/auth/signin';
import SignUpScreen from '../screens/auth/signup';

export default createAppContainer(
    createStackNavigator({
        // bottom navigator
        Main: {
            screen: MainTabNavigator,
            navigationOptions: {
                header: null
            }
        },

        Profile: {
            screen: ProfileScreen
        },
        SignIn: {
            screen: SignInScreen
        },
        SignUp: {
            screen: SignUpScreen
        },
        CategoriesPublishers: {
            screen: CategoriesPublishersScreen
        },
        Journal: {
            screen: JournalScreen
        }
    })
);
