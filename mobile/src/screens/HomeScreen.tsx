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
        <View>
          <Headline text="Главная" style={styles.headline} />
          <CategorySelection style={styles.category} />
        </View>

        <View>
          <Journals />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    ...wrapper
  },
  category: {
    marginBottom: 20
  },
  headline: {
    marginLeft: 20,
    marginRight: 20
  }
});

export default HomeScreen;
