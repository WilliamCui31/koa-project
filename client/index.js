import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { getClientStore } from './store';
import Routes from './Routes';

const App = () => (
  <Provider store={getClientStore()}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>
);

ReactDom.hydrate(<App />, document.getElementById('root'));
