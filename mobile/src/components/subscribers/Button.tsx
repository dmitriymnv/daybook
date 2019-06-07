import React from 'react';
import { Text, View } from 'react-native';

import { grayIconText as styles } from '../button/style';

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  const maxLimitText = 20;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {text.length > maxLimitText
          ? `${text.substring(0, maxLimitText - 3)}...`
          : text}
      </Text>
    </View>
  );
};

export default Button;
