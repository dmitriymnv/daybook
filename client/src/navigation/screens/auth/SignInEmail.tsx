import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import EmailForm from '../../../components/auth/signin/EmailForm';
import Axios from 'axios';
import { apiServer } from '../../../core/system/types';

interface SignInScreenProps {
    navigation: NavigationScreenProp<Navigator>;
}

class SignInScreen extends Component<SignInScreenProps> {
    render() {
        return (
            <View style={styles.container}>
                <EmailForm onSubmit={this.onSubmit} />
            </View>
        );
    }

    onSubmit = async ({ email }: { email?: string }) => {
        await Axios.post(`${apiServer}/auth/emailCheck`, {
            data: {
                email
            }
        }).then(({ data: { error } }) => {
            if (!!error) {
                throw error;
            } else {
                this.props.navigation.navigate('Password', { email });
            }
        });
    };
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    }
});

export default SignInScreen;
