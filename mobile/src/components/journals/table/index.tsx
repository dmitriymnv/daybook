import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Dimensions
} from 'react-native';
import { withNavigation, NavigationScreenProp } from 'react-navigation';

import PreviewItemJournal, {
    PreviewItemJournalProps
} from './PreviewItemJournal';
import { main as mainColor } from '../../../constants/Colors';

interface TableJournalsProps {
    navigation: NavigationScreenProp<any, any>;
    data: Array<PreviewItemJournalProps>;
    handleLoadMore: () => void;
    loading: boolean;
}

const TableJournals = ({
    navigation,
    data,
    handleLoadMore,
    loading
}: TableJournalsProps) => {
    return (
        <FlatList
            data={data}
            renderItem={({ item }) => renderItem({ item, navigation })}
            keyExtractor={({ id }) => id.toString()}
            ListFooterComponent={() => renderFooter(loading)}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            numColumns={2}
            contentContainerStyle={styles.list}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
                <View>
                    <Text>Список журналов пуст</Text>
                </View>
            )}
        />
    );
};

const renderItem = ({
    item: { id, title, publisher },
    navigation
}: {
    item: PreviewItemJournalProps;
    navigation: TableJournalsProps['navigation'];
}) => {
    return (
        <TouchableOpacity
            onPress={() => onPress(id, navigation)}
            style={styles.item}
        >
            <PreviewItemJournal id={id} title={title} publisher={publisher} />
        </TouchableOpacity>
    );
};

const onPress = (id: number, navigation: TableJournalsProps['navigation']) => {
    navigation.navigate('Journal', { id });
};

const renderFooter = (loading: boolean) => {
    return loading ? (
        <View style={styles.loader}>
            <ActivityIndicator size="large" color={mainColor} />
        </View>
    ) : null;
};

const styles = StyleSheet.create({
    list: {
        margin: 20,
        alignItems: 'center'
    },
    item: {
        width: Dimensions.get('window').width / 2
    },
    loader: {
        padding: 20
    }
});

export default withNavigation(TableJournals);
