import React, { Component } from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';

import PreviewItemJournal, {
  PreviewItemJournalProps
} from './PreviewItemJournal';

interface TableJournalsProps {
  journals: Array<PreviewItemJournalProps>;
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
          {journals.map(({ title, publisher }, i) => (
            <PreviewItemJournal
              key={title}
              title={title}
              publisher={publisher}
            />
          ))}
        </View>
      </ScrollView>
    );
  }

  onPress = ({ title }: { title: string }) => {
    console.log(title);
  };
}

const styles = StyleSheet.create({
  scrollContainer: {
    position: 'relative'
  },
  container: {
    flexWrap: 'wrap'
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  item: {
    // position: 'relative',
    // width: '50%',
    // height: '30%',
    // marginBottom: 100
  }
});

export default TableJournals;
