import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';

const App = () => <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>;

ReactDom.hydrate(<App />, document.getElementById('root'));
