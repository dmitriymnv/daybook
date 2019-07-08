import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { title as titleStyle } from '../../constants/Style';
import { ButtonProps } from './index';

const WithountBackground = ({ text, onPress, style }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, ...style }}
    >
      <Text style={titleStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});

export default WithountBackground;
