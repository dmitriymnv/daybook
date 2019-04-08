import React from 'react';
import { TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';

import { tintColor } from '../../constants/Colors';

interface InputProps {
  value: string;
  onChangeText: (type: string) => any;
  keyboardType?: KeyboardTypeOptions;
  autoFocus?: boolean;
  secureTextEntry?: boolean;
}

const Input = ({
  value,
  keyboardType = 'default',
  onChangeText,
  autoFocus = false,
  secureTextEntry
}: InputProps) => {
  return (
    <TextInput
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      value={value}
      style={styles.input}
      autoFocus={autoFocus}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
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
