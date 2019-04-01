import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { categoriesList } from '../../../constants/App';
import Button from './Button';

interface SelectMenuProps {
  style: object;
}

const SelectMenu = ({ style }: SelectMenuProps) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ ...styles.container, ...style }}
    >
      {categoriesList.map(({ name, text, icon }) => (
        <TouchableOpacity onPress={() => onPress({ name })} key={name}>
          <Button text={text} icon={icon} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const onPress = ({ name }: { name: string }) => {
  console.log(name);
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30
  }
});

export default SelectMenu;
