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
    <View style={wrapper}>
      <View style={styles.head}>
        <Headline text="Подписки" />
        <TouchableOpacity
          style={styles.icon}
          onPress={() => authCheck({ navigate, userToken })}
        >
          <Ionicons
            name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
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
    navigate('SignIn');
  }
};

const styles = StyleSheet.create({
  head: {
    ...headSubscribeHomeScreen,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    flexDirection: 'row',
    height: '8%',
    paddingRight: 20
  },
  body: {
    height: '92%'
  },
  icon: {
    paddingLeft: 40
  }
});

const mapStateToProps = (state: any) => ({
  userToken: state[authModuleName].token
});

export default connect(mapStateToProps)(HomeScreen);
