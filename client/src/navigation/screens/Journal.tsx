import React, { PureComponent } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';

import Markdown from '../../components/journals/journal/Markdown';
import HidingHeaderScroll from '../../components/journals/journal/HidingHeaderScroll';
import axios from 'axios';
import { apiServer } from '../../core/system/types';

/* При переходе на данный экран
выполняется загрузка журнала, которая помещается в Markdown разметку.
После всё оборачивается в активный хедер */

interface Props {
    navigation: NavigationScreenProp<any>;
}

interface IState {
    id: number;
    data: string;
    loading: boolean;
}

export default class Journal extends PureComponent<Props, IState> {
    static navigationOptions = {
        header: null
    };

    state = {
        id: this.props.navigation.getParam('id'),
        data: '',
        loading: true
    };

    componentDidMount() {
        axios
            .post(`${apiServer}/journal`, {
                data: {
                    id: this.state.id
                }
            })
            .then(({ data: { content } }) => {
                this.setState(() => ({
                    data: content,
                    loading: false
                }));
            });
    }

    render() {
        const { loading, data } = this.state;

        const journal = loading ? (
            <ActivityIndicator size="large" />
        ) : (
            <Markdown data={data} />
        );

        return <HidingHeaderScroll>{journal}</HidingHeaderScroll>;
    }
}
