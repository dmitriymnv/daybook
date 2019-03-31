import React, { Component } from 'react';
import { View } from 'react-native';

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
      <View>
        {journals.map(({ title, publisher }, i) => (
          <PreviewItemJournal key={i} title={title} publisher={publisher} />
        ))}
      </View>
    );
  }
}

export default TableJournals;
