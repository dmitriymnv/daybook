import React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { View, StyleSheet } from 'react-native';

import Headline from '../common/Headline';
import CategorySelection from '../categories/categorySelection';
import { headSubscribeHomeScreen } from '../../constants/Style';

interface HeadScreenProps {
    navigation: NavigationScreenProp<any, any>;
}

const HeadScreen = ({ navigation }: HeadScreenProps) => {
    return (
        <View style={headSubscribeHomeScreen}>
            <View style={styles.headline}>
                <Headline text="Главная" />
            </View>

            <CategorySelection navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    headline: {
        alignItems: 'flex-start',
        marginBottom: 20
    }
});

export default HeadScreen;
