import React, { Component } from 'react';
import { View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import { wrapperHomeSubscribersScreen } from '../constants/Style';
import Journals from '../components/journals';
import Header from '../components/home/Header';

interface HomeScreen {
    navigation: NavigationScreenProp<any, any>;
}

class HomeScreen extends Component<HomeScreen> {
    render() {
        return (
            <View style={wrapperHomeSubscribersScreen}>
                <Header navigation={this.props.navigation} />
                <Journals />
            </View>
        );
    }
}

export default HomeScreen;
