import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

import { categoriesList } from '../../../constants/App';
import Button from './Button';

interface SelectMenuProps {
  style?: object;
}

const SelectMenu = ({ style }: SelectMenuProps) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ ...styles.container, ...style }}
    >
      {categoriesList.map(({ id, text, icon }) => (
        <TouchableOpacity onPress={() => onPress({ id })} key={id}>
          <Button text={text} icon={icon} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const onPress = ({ id }: { id: string }) => {
  console.log(id);
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20
  }
});

export default SelectMenu;
