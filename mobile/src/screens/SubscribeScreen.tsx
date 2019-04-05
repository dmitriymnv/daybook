import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { wrapperBottomTabNavigator as wrapper } from '../constants/Style';
import Headline from '../components/common/Headline';
import Ionicons from '../navigation/TopBarIcon';
import { headSubscribeHomeScreen } from '../constants/Style';
import { authModuleName } from '../core/constants';

interface HomeScreenProps {
  navigation: NavigationScreenProp<any, any>;
  userToken: string;
}

const HomeScreen = ({
  navigation: { navigate },
  userToken
}: HomeScreenProps) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.head}>
        <Headline text="Подписки" style={styles.headline} />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => authCheck({ navigate, userToken })}
        >
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
};

const authCheck = ({
  navigate,
  userToken
}: {
  navigate: (screen: string) => any;
  userToken: string;
}) => {
  if (userToken) {
    navigate('Profile');
  } else {
    navigate('Signin');
  }
};

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

const mapStateToProps = (state: any) => ({
  userToken: state[authModuleName].token
});

export default connect(mapStateToProps)(HomeScreen);
