import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { wrapper } from '../constants/Style';
import { categories } from '../constants/App';
import Headline from '../components/common/Headline';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Headline text="Главная" style={styles.headline} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    ...wrapper
  },
  headline: {
    marginLeft: 20,
    marginRight: 20
  }
});

export default HomeScreen;
