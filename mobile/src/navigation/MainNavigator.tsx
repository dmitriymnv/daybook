import React from 'react';
import { Platform, Dimensions } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from './TopBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SubscribersScreen from '../screens/SubscribersScreen';
import { main as mainColor, dark as darkColor } from '../constants/Colors';

export interface TabBarIconProps {
    focused: boolean;
    name: string;
    style?: object;
}

export default createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Главная',
                tabBarIcon: ({ focused }: TabBarIconProps) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
                    />
                )
            }
        },

        Subscribers: {
            screen: SubscribersScreen,
            navigationOptions: {
                tabBarLabel: 'Подписки',
                tabBarIcon: ({ focused }: TabBarIconProps) => (
                    <TabBarIcon
                        focused={focused}
                        name={
                            Platform.OS === 'ios'
                                ? 'ios-bookmarks'
                                : 'md-bookmarks'
                        }
                    />
                )
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: mainColor,
            inactiveTintColor: darkColor,
            style: {
                height: Dimensions.get('window').height * 0.07
            },
            labelStyle: {
                marginBottom: 5,
                fontSize: 10
            },
            showIcon: true
        }
    }
);
