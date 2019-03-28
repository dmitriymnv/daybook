import { IReducer } from './index';

const defaultState = {
  count: 0
};

export default (state = defaultState, { type, payload }: IReducer) => {
  switch (type) {
    default:
      return state;
  }
};
