import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';

export default (
  <Fragment>
    <Route path="/" exact component={Home} />
    <Route path="/login" exact component={Login} />
  </Fragment>
);
