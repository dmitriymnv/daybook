import React from 'react';
import { Text, View, Platform } from 'react-native';

import Ionicons from '../../../navigation/TopBarIcon';
import { grayIconText as styles } from '../../button/style';

interface ButtonProps {
  text: string;
  icon: { ios: string; md: string };
}

const Button = ({ text, icon: { ios, md } }: ButtonProps) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name={Platform.OS === 'ios' ? ios : md}
        focused={false}
        style={styles.icon}
      />

      <Text style={styles.title}>{text}</Text>
    </View>
  );
};

export default Button;
