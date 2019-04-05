import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native';

import PreviewItemJournal, {
  PreviewItemJournalProps
} from './PreviewItemJournal';
import { tintColor } from '../../../constants/Colors';

interface JournalTableItem extends PreviewItemJournalProps {
  id: number;
}

interface TableJournalsProps {
  data: Array<JournalTableItem>;
  handleLoadMore: () => void;
  loading: boolean;
}

const TableJournals = ({
  data,
  handleLoadMore,
  loading
}: TableJournalsProps) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={({ id }) => id.toString()}
      ListFooterComponent={() => renderFooter(loading)}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0.5}
      numColumns={2}
      contentContainerStyle={styles.list}
    />
  );
};

const renderItem = ({ item: { id, title } }: { item: JournalTableItem }) => {
  return (
    <TouchableOpacity onPress={() => onPress(id)} style={styles.item}>
      <PreviewItemJournal title={title} />
    </TouchableOpacity>
  );
};

const onPress = (id: number) => {};

const renderFooter = (loading: boolean) => {
  return loading ? (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={tintColor} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column'
  },
  item: {
    width: '50%'
  },
  loader: {
    padding: 20
  }
});

export default TableJournals;
