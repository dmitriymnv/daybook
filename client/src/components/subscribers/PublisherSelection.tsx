import React from 'react';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { AuthState } from '../../core/auth/types';
import Button from './Button';

const publisherSelections = ({
    userSubscribers,
    navigate
}: {
    userSubscribers: AuthState['subscribers'];
    //Заменить any
    navigate: NavigationScreenProp<any>['navigate'];
}) => {
    return (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <SubscribersList
                userSubscribers={userSubscribers}
                navigate={navigate}
            />
        </ScrollView>
    );
};

const SubscribersList = ({
    userSubscribers,
    navigate
}: {
    userSubscribers: AuthState['subscribers'];
    //Заменить any
    navigate: NavigationScreenProp<any>['navigate'];
}) => {
    return (
        <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            style={{ ...styles.container }}
        >
            {userSubscribers.map((title, index) => (
                <TouchableOpacity
                    onPress={() => onPress({ publishers: title, navigate })}
                    key={index}
                >
                    <Button text={title} />
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};
const onPress = ({
    publishers,
    navigate
}: {
    publishers: string;
    navigate: NavigationScreenProp<any>['navigate'];
}) => {
    navigate('CategoriesPublishers', { publishers });
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row'
    }
});

export default publisherSelections;
