import React, { Component } from 'react';
import { AppLoading, Font, Constants } from 'expo';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import configureStore from './core';
import { authCheck } from '../src/core/auth/actions';

const store = configureStore();

class App extends Component {
  state = {
    loading: true
  };

  async componentWillMount() {
    store.dispatch(authCheck());
  }

  render() {
    if (this.state.loading) {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={console.warn}
          onFinish={() =>
            this.setState(() => ({
              loading: false
            }))
          }
        />
      );
    } else {
      return (
        <View style={styles.container}>
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
    flex: 1,
    marginTop: -Constants.statusBarHeight
  }
});

export default App;
