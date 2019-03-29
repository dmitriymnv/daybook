import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from './TopBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SubscribeScreen from '../screens/SubscribeScreen';
import Colors from '../constants/Colors';

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

    Subscibe: {
      screen: SubscribeScreen,
      navigationOptions: {
        tabBarLabel: 'Подписки',
        tabBarIcon: ({ focused }: TabBarIconProps) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tintColor,
      labelStyle: {
        fontSize: 20
      },
      showLabel: false
    }
  }
);
