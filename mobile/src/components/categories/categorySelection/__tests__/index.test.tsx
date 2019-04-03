import React from 'react';
import renderer from 'react-test-renderer';

import CategorySelection from '../index';

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

it('Должен отобразить кнопки для выбора категории', () => {
  const snap = renderer.create(<CategorySelection />).toJSON();

  expect(snap).toMatchSnapshot();
});
