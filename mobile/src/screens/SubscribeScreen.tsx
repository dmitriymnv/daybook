import React, { Component } from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { wrapper } from '../constants/Style';
import Headline from '../components/common/Headline';
import Ionicons from '../navigation/TopBarIcon';
import { grayColor } from '../constants/Colors';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.head}>
          <Headline text="Подписки" style={styles.headline} />
          <TouchableOpacity style={styles.icon}>
            <Ionicons
              name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
              style={styles.ion}
              focused={false}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    ...wrapper
  },
  head: {
    flexDirection: 'row',
    alignItems: 'baseline',
    paddingBottom: 5,
    borderBottomWidth: 1,
    borderColor: grayColor
  },
  headline: {
    marginLeft: 20,
    marginRight: 20,
    flexBasis: '70%'
  },
  icon: {
    position: 'relative',
    flexBasis: '30%',
    height: 50,
    paddingRight: 40,
    textAlign: 'right'
  },
  ion: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'right'
  }
});

export default HomeScreen;
