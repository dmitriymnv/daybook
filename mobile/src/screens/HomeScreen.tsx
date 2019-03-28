import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { headerTitle } from '../constants/TextStyle';

class HomeScreen extends Component {
  render() {
    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.header__title}>Главная</Text>
          <View style={styles.before} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    position: 'relative',
    marginTop: 70,
    marginLeft: 25,
    width: '30%'
  },
  header__title: {
    ...headerTitle
  },
  before: {
    position: 'absolute',
    left: 0,
    bottom: 1,
    width: '100%',
    height: 4,
    backgroundColor: Colors.tintColor
  }
});

export default HomeScreen;
