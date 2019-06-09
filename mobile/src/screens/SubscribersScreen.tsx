import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { wrapperHomeSubscribersScreen } from '../constants/Style';
import Header from '../components/subscribers/Header';
import Journals from '../components/journals';
import { AppState } from '../core';
import { AuthState } from '../core/auth/types';

interface SubscribersScreenProps {
    navigation: NavigationScreenProp<any, any>;
    userSubscribers: AuthState['subscribers'];
}

const SubscribersScreen = ({
    navigation,
    userSubscribers
}: SubscribersScreenProps) => {
    return (
        <View style={wrapperHomeSubscribersScreen}>
            <Header navigation={navigation} userSubscribers={userSubscribers} />
            <Body userSubscribers={userSubscribers} />
        </View>
    );
};

const Body = ({
    userSubscribers
}: {
    userSubscribers: AuthState['subscribers'];
}) => {
    return userSubscribers.length ? (
        <Journals options={{ publishers: userSubscribers }} />
    ) : (
        <Text>Подписки отсутствуют</Text>
    );
};

const mapStateToProps = (state: AppState) => ({
    userSubscribers: state.auth.subscribers
});

export default connect(mapStateToProps)(SubscribersScreen);
