import React from 'react';
import {
    TouchableOpacity,
    Platform,
    GestureResponderEvent,
    View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import EmailScreen from './Email';
import PasswordScreen from './Password';
import Ionicons from '../../../navigation/TopBarIcon';
import ButtonWithountBackground from '../../../components/button/WithountBackground';

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
                state: { index },
                goBack,
                navigate
            }
        }) => {
            return {
                headerLeft: <Left onPress={() => goBack(null)} />,
                headerRight:
                    index === 0 ? (
                        <Right onPress={() => navigate('SignUp')} />
                    ) : (
                        <View />
                    )
            };
        }
    }
);

const Left = ({
    onPress
}: {
    onPress: (event: GestureResponderEvent) => void;
}) => (
    <TouchableOpacity onPress={onPress} style={{ padding: 15 }}>
        <Ionicons
            name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
            focused={false}
        />
    </TouchableOpacity>
);

const Right = ({
    onPress
}: {
    onPress: (event: GestureResponderEvent) => void;
}) => <ButtonWithountBackground text={'Регистрация'} onPress={onPress} />;
