import React from 'react';
import { connect } from 'react-redux';
import { NavigationScreenProp } from 'react-navigation';
import { View, TouchableOpacity, Platform, StyleSheet } from 'react-native';

import Headline from '../common/Headline';
import Ionicons from '../../navigation/TopBarIcon';
import { AppState } from '../../core';
import PublisherSelections from './PublisherSelection';
import { AuthState } from '../../core/auth/types';
import { headSubscribeHomeScreen } from '../../constants/Style';

interface HeadScreenProps {
    navigation: NavigationScreenProp<any, any>;
    isAuth: boolean;
    userSubscribers: AuthState['subscribers'];
}

const HeadScreen = ({
    navigation: { navigate },
    isAuth,
    userSubscribers
}: HeadScreenProps) => {
    return (
        <View style={headSubscribeHomeScreen}>
            <View style={styles.headlineProfile}>
                <Headline text="Подписки" />
                <TouchableOpacity
                    style={styles.icon}
                    onPress={() => authCheck({ navigate, isAuth })}
                >
                    <Ionicons
                        name={
                            Platform.OS === 'ios' ? 'ios-person' : 'md-person'
                        }
                        focused={false}
                    />
                </TouchableOpacity>
            </View>

            <PublisherSelections
                userSubscribers={userSubscribers}
                navigate={navigate}
            />
        </View>
    );
};

const authCheck = ({
    navigate,
    isAuth
}: {
    navigate: (screen: string) => any;
    isAuth: boolean;
}) => {
    if (isAuth) {
        navigate('Profile');
    } else {
        navigate('SignIn');
    }
};

const styles = StyleSheet.create({
    icon: {
        paddingLeft: 100,
        paddingRight: 20
    },
    headlineProfile: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexDirection: 'row',
        marginBottom: 20
    }
});

const mapStateToProps = (state: AppState) => ({
    isAuth: !!state.auth.token
});

export default connect(mapStateToProps)(HeadScreen);
