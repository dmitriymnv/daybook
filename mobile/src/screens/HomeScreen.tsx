import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import { wrapper } from '../constants/Style';
import CategorySelection from '../components/categories/categorySelection';
import Headline from '../components/common/Headline';
import AllJournals from '../components/journals/AllJournals';

class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Headline text="Главная" style={styles.headline} />
        <CategorySelection onClick={this.categorySelectionPressing} />
        <AllJournals />
      </View>
    );
  }

  categorySelectionPressing = (name: string): void => {
    console.log(1, name);
  };
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
