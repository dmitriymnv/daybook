import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { TabBarIconProps } from './MainNavigator';

const TabBarIcon = ({ name, focused }: TabBarIconProps) => {
  return (
    <Ionicons
      name={name}
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};

export default TabBarIcon;
