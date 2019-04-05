import React from 'react';
import renderer from 'react-test-renderer';

import Journals from '../index';

jest.mock('ScrollView', () => {
  const RealComponent = require.requireActual('ScrollView');
  const React = require('React');
  class ScrollView extends React.Component {
    scrollTo() {}

    render() {
      return React.createElement('ScrollView', this.props, this.props.children);
    }
  }
  ScrollView.propTypes = RealComponent.propTypes;
  return ScrollView;
});

jest.mock('axios', () => {
  // const data = [{ title: 'test article', publisher: 'test url' }];
  const data = {
    result: [
      { title: 'Заголовок1', pubsliher: 'Издатель1' },
      { title: 'Заголовок2', pubsliher: 'Издатель2' }
    ]
  };
  return {
    post: jest.fn(() => {
      return Promise.resolve({ data });
    })
  };
});

describe('Вывод журналов', () => {
  it('Возврат журналов при удачной загрузки', () => {
    const snap = renderer.create(<Journals />).root;

    expect(snap).toMatchSnapshot();
  });
});
