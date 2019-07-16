import { createStore, applyMiddleWare, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { homeReducer } from './views/Home/store';
import clientAxios from './request';
import serverAxios from '../server/request';

const reducer = combineReducers({ home: homeReducer });

export const getStore = () => {
  return createStore(reducer, applyMiddleWare(thunk.withExtraArgument(serverAxios)));
};

export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(reducer, defaultState, applyMiddleWare(thunk.withExtraArgument(clientAxios)));
};
