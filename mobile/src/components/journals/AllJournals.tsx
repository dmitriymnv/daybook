import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';

import PreviewItemJournal, {
  PreviewItemJournalProps
} from './PreviewItemJournal';
import { AllJournals as AllJournalsRequest } from '../../core/sagas/journals';
import { apiServer } from '../../core/constants';

interface AllJournalsProps {
  AllJournalsRequest: ({ to }: { to: number }) => void;
}

class AllJournals extends Component<AllJournalsProps> {
  state = {
    journals: [],
    count: null,
    loading: true,
    loaded: false,
    errors: null
  };

  componentDidMount() {
    axios
      .post(`${apiServer}/journals`, {
        data: {
          to: 0
        }
      })
      .then(({ data }) => {
        this.setState({
          journals: data.result,
          count: data.count,
          loading: false,
          loaded: true
        });
      })
      // СДЕЛАТЬ ОБРАБОТКУ ОШИБОК
      .catch(errors => this.setState({ errors }));
  }

  render() {
    const { journals, loading, loaded } = this.state;
    if (loading) {
      return (
        <View>
          <Text>Загрузка...</Text>
        </View>
      );
    } else if (!loading && loaded) {
      return (
        <View>
          {journals.map(({ title, publisher }: PreviewItemJournalProps) => (
            <PreviewItemJournal
              key={title}
              title={title}
              publisher={publisher}
            />
          ))}
        </View>
      );
    }
  }
}

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { AllJournalsRequest }
)(AllJournals);
