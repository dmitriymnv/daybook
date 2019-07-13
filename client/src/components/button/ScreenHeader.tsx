import React from 'react';
import { TouchableOpacity, Platform, StyleSheet, Text } from 'react-native';
import { NavigationScreenProp, withNavigation } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import { title as titleStyle } from '../../constants/Style';

interface Props {
    navigation: NavigationScreenProp<any>;
}

export const LeftBack = withNavigation(({ navigation: { goBack } }: Props) => (
    <TouchableOpacity onPress={() => goBack(null)} style={styles.container}>
        <Ionicons
            name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
            size={25}
        />
    </TouchableOpacity>
));

export const RightSignUp = withNavigation(
    ({ navigation: { navigate } }: Props) => (
        <TouchableOpacity
            onPress={() => navigate('SignUp')}
            style={styles.container}
        >
            <Text style={titleStyle}>Регистрация</Text>
        </TouchableOpacity>
    )
);

const styles = StyleSheet.create({
    container: {
        padding: 15
    }
});
