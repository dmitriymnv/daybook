import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from './TopBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SubscribeScreen from '../screens/SubscribeScreen';
import { mainColor } from '../constants/Colors';

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
      activeTintColor: mainColor,
      style: {
        height: '7%'
      },
      showLabel: false
    }
  }
);
