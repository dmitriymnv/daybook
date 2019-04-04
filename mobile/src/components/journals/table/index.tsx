import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';

import PreviewItemJournal, {
  PreviewItemJournalProps
} from './PreviewItemJournal';

interface JournalTableItem extends PreviewItemJournalProps {
  id: number;
}

interface TableJournalsProps {
  journals: Array<JournalTableItem>;
  count: number;
}

class TableJournals extends Component<TableJournalsProps> {
  state = {
    loading: false,
    loaded: true,
    count: this.props.count
  };

  render() {
    const { journals } = this.props;
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          {journals.map(({ id, title }, i) => (
            <TouchableOpacity
              key={i}
              style={styles.item}
              onPress={() => this.onPress({ id })}
            >
              <PreviewItemJournal title={title} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    );
  }

  onPress = ({ id }: { id: number }) => {
    console.log(id);
  };
}

const styles = StyleSheet.create({
  scrollContainer: {},
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  item: {
    width: '50%'
  }
});

export default TableJournals;
