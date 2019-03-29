import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import { TabBarIconProps } from './MainNavigator';

const TabBarIcon = ({ name, focused, style }: TabBarIconProps) => {
  return (
    <Ionicons
      name={name}
      size={26}
      style={style}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
};

export default TabBarIcon;
