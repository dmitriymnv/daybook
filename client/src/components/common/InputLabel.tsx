import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TextInputProps
} from 'react-native';

import {
  title as titleStyle,
  textError,
  Input as InputStyle
} from '../../constants/Style';

interface InputLabelProps {
  title: string;
  error: string;
  input: TextInputProps;
}

const InputLabel = ({ title, error, input }: InputLabelProps) => {
  const errorText = !!error && <Text style={styles.error}>{error}</Text>;

  return (
    <View>
      <Text style={titleStyle}>{title}</Text>
      <TextInput style={InputStyle} {...input} />
      {errorText}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    ...textError,
    marginBottom: 10
  }
});

export default InputLabel;
