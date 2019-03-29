import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { categoriesList } from '../../../constants/App';
import Button from './Button';

interface SelectMenuProps {
  onClick: (name: string) => void;
}

const SelectMenu = ({ onClick }: SelectMenuProps) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categoriesList.map(({ name, text, icon }) => (
        <TouchableOpacity onPress={() => onClick(name)} key={name}>
          <Button text={text} icon={icon} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30
  }
});

export default SelectMenu;
