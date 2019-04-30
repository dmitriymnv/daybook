import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { wrapperBottomTabNavigator as wrapper } from '../constants/Style';
import { headSubscribeHomeScreen } from '../constants/Style';
import HeadScreen from '../components/subscribe/HeadScreen';

interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
  userToken: string;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  return (
    <View style={wrapper}>
      <HeadScreen styleWrapper={styles.head} navigation={navigation} />
      <View style={styles.body} />
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    ...headSubscribeHomeScreen,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexDirection: 'row',
    height: '8%'
  },
  body: {
    height: '92%'
  }
});

export default HomeScreen;
