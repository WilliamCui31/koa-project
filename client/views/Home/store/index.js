import { CHANGE_LIST } from './constants';

const defaultState = {
  name: 'WilliamCui',
  newList: [
    // { id: 1, name: 'iphone 10', price: '9000' },
    // { id: 2, name: 'Oppo Find X', price: '5000' },
    // { id: 3, name: 'Vivo X20', price: '3000' },
    // { id: 4, name: 'XiaoMi 9', price: '2900' }
  ]
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
