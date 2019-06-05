import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

import Headline from '../common/Headline';
import CategorySelection from '../categories/categorySelection';

interface HeadScreenProps {
  style: StyleProp<ViewStyle>;
  navigation: NavigationScreenProp<any, any>;
}

const HeadScreen = ({ style, navigation }: HeadScreenProps) => {
  return (
    <View style={style}>
      <View style={styles.headline}>
        <Headline text="Главная" />
      </View>

      <CategorySelection navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  headline: {
    alignItems: 'flex-start'
  }
});

export default HeadScreen;
