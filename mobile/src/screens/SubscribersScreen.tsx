import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { wrapperBottomTabNavigator as wrapper } from '../constants/Style';
import { headSubscribeHomeScreen } from '../constants/Style';
import HeadScreen from '../components/subscribers/HeadScreen';
import Journals from '../components/journals';
import { authModuleName } from '../core/constants';

interface SubscribersScreenProps {
  navigation: NavigationScreenProp<any, any>;
  subscribersUser: [String];
}

const SubscribersScreen = ({
  navigation,
  subscribersUser
}: SubscribersScreenProps) => {
  return (
    <View style={wrapper}>
      <HeadScreen styleWrapper={styles.head} navigation={navigation} />
      <View style={styles.body}>
        <Journals loading={{ publisher: subscribersUser }} />
      </View>
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
    marginTop: 20,
    height: '92%'
  }
});

export default connect((state: { auth: { subscribers: [String] } }) => ({
  subscribersUser: state[authModuleName].subscribers
}))(SubscribersScreen);
