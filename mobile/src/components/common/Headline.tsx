import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { tintColor } from '../../constants/Colors';
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
    borderBottomColor: tintColor
  }
});

export default Headline;
