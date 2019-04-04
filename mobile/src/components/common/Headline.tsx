import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { headerTitle } from '../../constants/Style';

interface HeadlineProps {
  text: string;
  style: object;
}

const Headline = ({ text, style }: HeadlineProps) => {
  return (
    <View style={{ ...styles.wrapper, ...style }}>
      <Text style={styles.headline}>{text}</Text>
      {/* <View style={styles.decoration} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // width: 100
  },
  headline: {
    ...headerTitle
  },
  decoration: {
    position: 'absolute',
    left: 0,
    bottom: 1,
    width: '100%',
    height: 4,
    backgroundColor: Colors.tintColor
  }
});

export default Headline;
