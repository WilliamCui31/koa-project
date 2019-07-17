import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import home from './views/Home/store';
import clientAxios from './request';
import serverAxios from '../server/request';

const reducer = combineReducers({ home });

export const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk.withExtraArgument(serverAxios)));
};

export const getClientStore = () => {
  const defaultState = window.context ? window.context.state : {};
  return createStore(reducer, defaultState, applyMiddleware(thunk.withExtraArgument(clientAxios)));
};
