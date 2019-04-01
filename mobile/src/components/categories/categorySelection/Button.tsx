import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';

import Ionicons from '../../../navigation/TopBarIcon';
import Colors from '../../../constants/Colors';
import { title } from '../../../constants/Style';

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
    marginLeft: 15,
    width: 140,
    height: 45,
    borderRadius: 5,
    backgroundColor: Colors.cardBackroundColor
  },
  title: {
    lineHeight: 45,
    ...title
  },
  icon: {
    lineHeight: 45,
    marginLeft: 10
  }
});

export default Button;
