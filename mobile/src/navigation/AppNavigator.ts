import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainNavigator';
import ProfileScreen from '../screens/ProfileScreen';
import CategoriesPublishersScreen from '../screens/CategoriesPublishersScreen';
import { SignInStack, SignUpStack } from '../screens/auth/index';

export default createAppContainer(
    createStackNavigator({
        // bottom navigator
        Main: {
            screen: MainTabNavigator,
            navigationOptions: () => ({
                header: null
            })
        },
        Profile: {
            screen: ProfileScreen
        },
        SignIn: {
            screen: SignInStack,
            navigationOptions: () => ({
                title: 'Авторизация'
            })
        },
        SignUp: {
            screen: SignUpStack,
            navigationOptions: () => ({
                title: 'Регистрация'
            })
        },
        CategoriesPublishers: {
            screen: CategoriesPublishersScreen
        }
    })
);
