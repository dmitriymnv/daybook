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
}

export default createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Главная',
      tabBarOptions: {
        activeTintColor: Colors.tintColor
      },
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
      tabBarOptions: {
        activeTintColor: Colors.tintColor,
        style: {
          marginBottom: 10
        }
      },
      tabBarIcon: ({ focused }: TabBarIconProps) => (
        <TabBarIcon
          focused={focused}
          name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'}
        />
      )
    }
  }
});
