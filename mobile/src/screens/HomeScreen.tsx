import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { wrapperBottomTabNavigator as wrapper } from '../constants/Style';
import Journals from '../components/journals';
import { headSubscribeHomeScreen } from '../constants/Style';
import HeadScreen from '../components/home/headScreen';

interface HomeScreen {
  navigation: NavigationScreenProp<any, any>;
}

class HomeScreen extends Component<HomeScreen> {
  render() {
    return (
      <View style={wrapper}>
        <HeadScreen
          styleWrapper={styles.head}
          navigation={this.props.navigation}
        />
        <View style={styles.body}>
          <Journals />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
