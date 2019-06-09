import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { categoriesList } from '../../../constants/App';
import ButtonSelection from './Button';

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
            {CategoriesList(navigation)}
        </ScrollView>
    );
};

const CategoriesList = (navigation: SelectMenuProps['navigation']) =>
    categoriesList.map(({ id, text, icon }) => (
        <TouchableOpacity onPress={() => onPress({ id, navigation })} key={id}>
            <ButtonSelection text={text} icon={icon} />
        </TouchableOpacity>
    ));

const onPress = ({
    id,
    navigation
}: {
    id: number;
    navigation: NavigationScreenProp<any, any>;
}) => {
    navigation.navigate('CategoriesJournals', { id });
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export default SelectMenu;
