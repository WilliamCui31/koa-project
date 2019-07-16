import { CHANGE_LIST } from './constants';

const defaultState = {
  name: 'WilliamCui',
  newList: []
};

function HomeReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case CHANGE_LIST:
      return { ...state, list: payload.list };
    default:
      return state;
  }
}

export { HomeReducer };
