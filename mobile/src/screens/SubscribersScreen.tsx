import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { wrapperBottomTabNavigator as wrapper } from '../constants/Style';
import { headSubscribeHomeScreen } from '../constants/Style';
import Header from '../components/subscribers/Header';
import Journals from '../components/journals';
import { AppState } from '../core';
import { AuthState } from '../core/auth/types';

interface SubscribersScreenProps {
  navigation: NavigationScreenProp<any, any>;
  userSubscribers: AuthState['subscribers'];
}

const SubscribersScreen = ({
  navigation,
  userSubscribers
}: SubscribersScreenProps) => {
  return (
    <View style={wrapper}>
      <Header
        style={styles.head}
        navigation={navigation}
        userSubscribers={userSubscribers}
      />
      <Body userSubscribers={userSubscribers} />
    </View>
  );
};

const Body = ({
  userSubscribers
}: {
  userSubscribers: AuthState['subscribers'];
}) => {
  return (
    <View style={styles.body}>
      {userSubscribers.length ? (
        <Journals options={{ publishers: userSubscribers }} />
      ) : (
        <View>
          <Text>Подписки отсутствуют</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    ...headSubscribeHomeScreen,
    height: '20%'
  },
  body: {
    height: '80%'
  }
});

const mapStateToProps = (state: AppState) => ({
  userSubscribers: state.auth.subscribers
});

export default connect(mapStateToProps)(SubscribersScreen);
