import { CHANGE_LIST } from './constants';

const changeList = list => ({
  type: CHANGE_LIST,
  payload: { list }
});

export const getHomeList = () => (dispatch, getState, axiosInstance) =>
  axiosInstance.get('/api/products').then(res => {
    const list = res.products;
    dispatch(changeList(list));
  });
