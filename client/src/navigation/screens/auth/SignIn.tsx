import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import EmailScreen from './SignInEmail';
import PasswordScreen from './SignInPassword';
import { LeftBack, RightSignUp } from '../../../components/button/ScreenHeader';

export default createStackNavigator(
    {
        Email: {
            screen: EmailScreen
        },
        Password: {
            screen: PasswordScreen
        }
    },
    {
        initialRouteName: 'Email',
        mode: 'modal',
        defaultNavigationOptions: {
            header: null
        },
        navigationOptions: ({
            navigation: {
                state: { index }
            }
        }) => {
            return {
                headerLeft: <LeftBack />,
                headerRight: index === 0 ? <RightSignUp /> : <View />
            };
        }
    }
);
