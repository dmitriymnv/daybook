import React, { Component } from 'react';
import { AppLoading, Font, Constants } from 'expo';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import store from './core';
import { authCheck } from '../src/core/sagas/auth';
import { tintColor } from './constants/Colors';

store.dispatch(authCheck());

class App extends Component {
  state = {
    loading: true
  };

  render() {
    if (this.state.loading) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={console.warn}
          onFinish={() => this.setState({ loading: false })}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.statusBar} />
          <Provider store={store}>
            <AppNavigator />
          </Provider>
        </View>
      );
    }
  }

  loadResourcesAsync = async (): Promise<any> => {
    return Promise.all<any>([
      await Font.loadAsync({
        'GoogleSans-Bold': require('../assets/fonts/GoogleSans-Bold.ttf'),
        'GoogleSans-BoldItalic': require('../assets/fonts/GoogleSans-BoldItalic.ttf'),
        'GoogleSans-Italic': require('../assets/fonts/GoogleSans-Italic.ttf'),
        'GoogleSans-Medium': require('../assets/fonts/GoogleSans-Medium.ttf'),
        'GoogleSans-MediumItalic': require('../assets/fonts/GoogleSans-MediumItalic.ttf'),
        'GoogleSans-Regular': require('../assets/fonts/GoogleSans-Regular.ttf')
      })
    ]);
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  statusBar: {
    backgroundColor: tintColor,
    height: Constants.statusBarHeight
  }
});

export default App;
