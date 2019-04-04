import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { wrapperBottomTabNavigator as wrapper } from '../constants/Style';
import CategorySelection from '../components/categories/categorySelection';
import Headline from '../components/common/Headline';
import Journals from '../components/journals';
import { headSubscribeHomeScreen } from '../constants/Style';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.head}>
          <Headline text="Главная" style={styles.headline} />
          <CategorySelection />
        </View>

        <View style={styles.body}>
          <Journals />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper,
  head: {
    ...headSubscribeHomeScreen,
    height: '20%'
  },
  body: {
    height: '80%'
  },
  headline: {
    marginLeft: 20,
    marginRight: 20
  }
});

export default HomeScreen;
