import React, { Component } from 'react';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';

import { wrapperBottomTabNavigator as wrapper } from '../constants/Style';
import Headline from '../components/common/Headline';
import Ionicons from '../navigation/TopBarIcon';
import { headSubscribeHomeScreen } from '../constants/Style';

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

        <View style={styles.body} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper,
  head: {
    ...headSubscribeHomeScreen,
    flexDirection: 'row',
    alignItems: 'baseline',
    height: '8%'
  },
  body: {
    height: '92%'
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
