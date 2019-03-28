import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from '../../constants/Colors';
import { headerTitle } from '../../constants/TextStyle';

interface HeadlineProps {
  text: string;
}

class Headline extends Component<HeadlineProps> {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={styles.headline}>Главная</Text>
        <View style={styles.decoration} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    width: 100
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
