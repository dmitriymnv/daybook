import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { tintColor } from '../../constants/Colors';

interface InputProps {
  value: string;
  onChangeText: (type: string) => any;
}

const Input = ({ value, onChangeText }: InputProps) => {
  return (
    <TextInput onChangeText={onChangeText} value={value} style={styles.input} />
  );
};

const styles = StyleSheet.create({
  input: {
    marginTop: 10,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,
    borderWidth: 1,
    borderColor: tintColor,
    borderRadius: 1
  }
});

export default Input;
