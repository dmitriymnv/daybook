import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { ButtonProps } from './index';
import { dispabledButton, activeButton } from '../../constants/Style';

const Default = ({ text, onPress, style, disabled }: ButtonProps) => {
  const styleStatus = disabled ? styles.disabled : styles.active;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.default, ...styleStatus, ...style }}
      disabled={disabled}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  default: {
    padding: 20
  },
  active: {
    ...activeButton
  },
  disabled: {
    ...dispabledButton
  },
  text: {
    textAlign: 'center',
    fontFamily: 'GoogleSans-Bold',
    fontSize: 18,
    color: '#ffffff'
  }
});

export default Default;
