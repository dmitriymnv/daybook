import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

import { apiServer } from '../../core/constants';
import TableJournals from './table';

interface JournalsProps {
  categories?: string;
}

class Journals extends Component<JournalsProps> {
  state = {
    journals: [],
    count: 0,
    errors: null,
    loading: true,
    loaded: false
  };

  componentDidMount() {
    this.loadingJournalsRequest({ to: 0 })
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
    const { journals, count, errors, loading, loaded } = this.state;
    if (loading) {
      return (
        <View>
          <Text>Загрузка...</Text>
        </View>
      );
    } else if (!loading && loaded) {
      return <TableJournals journals={journals} count={count} />;
    } else if (!loaded && !loaded) {
      <View>
        <Text>{errors}</Text>
      </View>;
    }
  }

  loadingJournalsRequest = ({ to }: { to: number }) =>
    axios.post(`${apiServer}/journals`, {
      data: {
        to
      }
    });
}

export default Journals;
