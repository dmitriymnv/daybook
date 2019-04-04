import React, { Component } from 'react';
import axios from 'axios';

import { apiServer } from '../../core/constants';
import TableJournals from './table';

interface JournalsProps {
  categories?: string;
}

class Journals extends Component<JournalsProps> {
  state = {
    data: [],
    count: 0,
    errors: null,
    loading: true
  };

  componentDidMount() {
    this.getData();
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

  getData = async () =>
    axios
      .post(`${apiServer}/journals`, {
        data: {
          to: this.state.count
        }
      })
      .then(({ data }) => {
        this.setState({
          data: [...data.result, ...this.state.data],
          count: data.count || this.state.count,
          errors: data.errors || null,
          loading: false
        });
      })
      .catch(errors => {
        this.setState({ errors });
      });

  handleLoadMore = () => {
    const { data, count } = this.state;
    if (data.length < count) {
      this.setState({ loading: true }, () => this.getData());
    }
  };
}

export default Journals;
