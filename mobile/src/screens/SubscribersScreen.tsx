import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { wrapperBottomTabNavigator as wrapper } from '../constants/Style';
import { headSubscribeHomeScreen } from '../constants/Style';
import HeadScreen from '../components/subscribers/HeadScreen';
import Journals from '../components/journals';
import { authModuleName } from '../core/constants';

interface SubscribersScreenProps {
  navigation: NavigationScreenProp<any, any>;
  userSubscribers: Array<string>;
}

const SubscribersScreen = ({
  navigation,
  userSubscribers
}: SubscribersScreenProps) => {
  return (
    <View style={wrapper}>
      <HeadScreen styleWrapper={styles.head} navigation={navigation} />
      <View style={styles.body}>
        {userSubscribers.length ? (
          <Journals options={{ publishers: userSubscribers }} />
        ) : (
          <View>
            <Text>Подписки отсутствуют</Text>
          </View>
        )}
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

export default connect(
  (state: { [authModuleName]: { subscribers: Array<string> } }) => ({
    userSubscribers: state[authModuleName].subscribers
  })
)(SubscribersScreen);
