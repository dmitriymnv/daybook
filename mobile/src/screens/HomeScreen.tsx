import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { wrapper } from '../constants/Style';
import CategorySelection from '../components/categories/categorySelection';
import Headline from '../components/common/Headline';
import Journals from '../components/journals';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Headline text="Главная" style={styles.headline} />
        <CategorySelection style={styles.category} />
        <Journals />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    ...wrapper
  },
  category: {
    position: 'relative',
    marginBottom: 20,
    opacity: 0.4
  },
  headline: {
    marginLeft: 20,
    marginRight: 20
  }
});

export default HomeScreen;
