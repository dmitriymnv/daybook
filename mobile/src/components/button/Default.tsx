import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { ButtonProps } from './index';
import { tintColor } from '../../constants/Colors';

const Default = ({ text, onPress, style, disabled }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, ...style }}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: tintColor,
    padding: 20
  },
  text: {
    textAlign: 'center',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 18,
    color: '#ffffff'
  }
});

export default Default;
