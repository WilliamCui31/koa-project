import React, { Fragment } from 'react';
import Header from './components/Header';
import { renderRoutes } from 'react-router-config';

const App = ({ route }) => {
  return (
    <Fragment>
      <Header />
      {renderRoutes(route.routes)}
    </Fragment>
  );
};

export default App;
