import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { categoriesList } from '../../../constants/App';
import Button from './Button';

interface SelectMenuProps {
  style?: object;
  navigation: NavigationScreenProp<any, any>;
}

const SelectMenu = ({ style, navigation }: SelectMenuProps) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ ...styles.container, ...style }}
    >
      {categoriesList.map(({ id, text, icon }) => (
        <TouchableOpacity onPress={() => onPress({ id, navigation })} key={id}>
          <Button text={text} icon={icon} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const onPress = ({
  id,
  navigation
}: {
  id: string;
  navigation: NavigationScreenProp<any, any>;
}) => {
  navigation.navigate('CategoriesJournals', { id });
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  }
});

export default SelectMenu;
