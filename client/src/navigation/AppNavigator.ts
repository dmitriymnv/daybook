import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainNavigator';
import ProfileScreen from './screens/Profile';
import CategoriesPublishersScreen from './screens/CategoriesPublishers';
import JournalScreen from './screens/Journal';
import SignInScreen from './screens/auth/SignIn';
import SignUpScreen from './screens/auth/SignUp';

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
