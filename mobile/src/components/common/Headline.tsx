import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { main as mainColor } from '../../constants/Colors';
import { headerTitle } from '../../constants/Style';

interface HeadlineProps {
  text: string;
}

const Headline = ({ text }: HeadlineProps) => {
  return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
  text: {
    ...headerTitle,
    borderBottomWidth: 5,
    borderBottomColor: mainColor
  }
});

export default Headline;
