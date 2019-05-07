import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
  tabIconSelected as tabIconSelectedColor,
  dark as darkColor
} from '../constants/Colors';
import { TabBarIconProps } from './MainNavigator';

const TabBarIcon = ({ name, focused, style }: TabBarIconProps) => {
  return (
    <Ionicons
      name={name}
      size={23}
      style={style}
      color={focused ? tabIconSelectedColor : darkColor}
    />
  );
};

export default TabBarIcon;
