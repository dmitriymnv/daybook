import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

import PreviewItemJournal, {
  PreviewItemJournalProps
} from './PreviewItemJournal';
import { apiServer } from '../../core/constants';

interface AllJournalsProps {}

class AllJournals extends Component<AllJournalsProps> {
  state = {
    journals: [],
    count: null,
    errors: null,
    loading: true,
    loaded: false
  };

  componentDidMount() {
    this.AllJournalsRequest({ to: 0 })
      .then(({ data }) => {
        this.setState({
          journals: data.result,
          count: data.count,
          loading: false,
          loaded: true
        });
      })
      // СДЕЛАТЬ ОБРАБОТКУ ОШИБОК
      .catch(errors =>
        this.setState({ errors, loading: false, loaded: false })
      );
  }

  render() {
    const { journals, errors, loading, loaded } = this.state;
    if (loading) {
      return (
        <View>
          <Text>Загрузка...</Text>
        </View>
      );
    } else if (!loading && loaded) {
      return (
        <View>
          {journals.map(({ title, publisher }: PreviewItemJournalProps, i) => (
            <PreviewItemJournal key={i} title={title} publisher={publisher} />
          ))}
        </View>
      );
    } else if (!loaded && !loaded) {
      <View>
        <Text>{errors}</Text>
      </View>;
    }
  }

  AllJournalsRequest = ({ to }: { to: number }) =>
    axios.post(`${apiServer}/journals`, {
      data: {
        to
      }
    });
}

export default AllJournals;
