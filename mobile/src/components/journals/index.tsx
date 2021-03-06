import React, { Component } from 'react';
import axios from 'axios';

import { apiServer } from '../../core/system/types';
import TableJournals from './table';

interface JournalsProps {
  options?: {
    categories?: 0 | 1 | 2 | 3 | 4;
    publishers?: String[];
  };
}

class Journals extends Component<JournalsProps> {
  //Проверка того что компонент ещё не размонтирован
  _isMounted = false;

  state = {
    data: [],
    count: 0,
    errors: null,
    loading: true
  };

  componentDidMount() {
    this.getData();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { data, loading } = this.state;
    return (
      <TableJournals
        data={data}
        handleLoadMore={this.handleLoadMore}
        loading={loading}
      />
    );
  }

  getData = async () => {
    this._isMounted = true;

    return axios
      .post(`${apiServer}/journals`, {
        data: {
          from: this.state.data.length,
          ...this.props.options
        }
      })
      .then(({ data }) => {
        this._isMounted &&
          this.setState((state: { data: [] }) => ({
            data: [...state.data, ...data.result],
            count: data.count || this.state.count,
            errors: data.errors || null,
            loading: false
          }));
      })
      .catch(errors => {
        this._isMounted && this.setState(() => ({ errors }));
      });
  };

  handleLoadMore = () => {
    const { data, count, loading } = this.state;
    if (data.length < count && !loading) {
      this.setState(
        () => ({
          loading: false
        }),
        () => this.getData()
      );
    }
  };
}

export default Journals;
