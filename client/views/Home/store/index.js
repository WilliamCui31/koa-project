import { CHANGE_LIST } from './constants';

const defaultState = {
  name: 'WilliamCui',
  newList: []
};

export default (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LIST:
      return { ...state, newList: payload.list };
    default:
      return state;
  }
};
