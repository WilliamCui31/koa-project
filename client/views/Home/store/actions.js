import { CHANGE_LIST } from './constants';

const changeList = list => ({
  type: CHANGE_LIST,
  payload: { list }
});

export const getProducts = () => (dispatch, getState, axiosInstance) =>
  axiosInstance.get('/api/products').then(res => {
    const list = res.data.products;
    dispatch(changeList(list));
  });

export const createProduct = ({ name, manufacturer, price }) => (
  dispatch,
  getState,
  axiosInstance
) =>
  axiosInstance
    .post('/api/products', { name, manufacturer, price })
    .then(p => p && dispatch(getProducts()));
