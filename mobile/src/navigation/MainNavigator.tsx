import React from 'react';
import { Platform } from 'react-native';
import { createMaterialTopTabNavigator } from 'react-navigation';

import TabBarIcon from './TopBarIcon';
import HomeScreen from '../screens/HomeScreen';
import SubscribersScreen from '../screens/SubscribersScreen';
import { main as mainColor, dark as darkColor } from '../constants/Colors';

export interface TabBarIconProps {
  focused: boolean;
  name: string;
  style?: object;
}

export default createMaterialTopTabNavigator(
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
            name={Platform.OS === 'ios' ? 'ios-bookmarks' : 'md-bookmarks'}
          />
        )
      }
    }
  },
  {
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: mainColor,
      inactiveTintColor: darkColor,
      style: {
        height: '7%',
        backgroundColor: 'white'
      },
      labelStyle: {
        marginTop: 2,
        fontSize: 10
      },
      indicatorStyle: {
        height: 0
      },
      showIcon: true
    }
  }
);
