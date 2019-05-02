import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import Journals from '../components/journals';
import { categoriesList } from '../constants/App';

interface CategoriesJournalsScreenProps {
  navigation: NavigationScreenProp<any>;
}

class CategoriesJournalsScreen extends Component<
  CategoriesJournalsScreenProps
> {
  static navigationOptions = ({
    navigation: {
      state: {
        params: { id: categoriesId }
      }
    }
  }: {
    navigation: { state: { params: { id: number } } };
  }) => {
    const categoriesText = () => {
      const findCategories: { text: string } | undefined = categoriesList.find(
        ({ id }) => categoriesId === id
      );
      return findCategories ? findCategories.text : 'Ошибка в выборе категории';
    };

    return {
      title: `Категория - ${categoriesText()}`
    };
  };

  render() {
    const categoriesId = this.props.navigation.getParam('id');
    return (
      <View style={styles.container}>
        <Journals categories={categoriesId} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
});

export default CategoriesJournalsScreen;
