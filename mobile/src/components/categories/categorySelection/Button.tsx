import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

import Ionicons from '../../../navigation/TopBarIcon';
import { cardBackground as cardBackgroundColor } from '../../../constants/Colors';
import { title as titleStyle } from '../../../constants/Style';

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
        style={styles.title}
      />
      <Text style={styles.icon}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginRight: 10,
    width: 140,
    height: 45,
    borderRadius: 5,
    backgroundColor: cardBackgroundColor
  },
  title: {
    ...titleStyle,
    lineHeight: 45
  },
  icon: {
    lineHeight: 45,
    marginLeft: 10
  }
});

export default Button;
