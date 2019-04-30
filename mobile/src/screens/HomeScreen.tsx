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
          <View style={styles.headline}>
            <Headline text="Главная" />
          </View>

          <CategorySelection />
        </View>

        <View style={styles.body}>
          <Journals categories={2} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper,
  head: {
    ...headSubscribeHomeScreen,
    height: '18%'
  },
  body: {
    height: '82%'
  },
  headline: {
    alignItems: 'flex-start'
  }
});

export default HomeScreen;
