import React from 'react';
import { Route, IndexRedirect, Redirect } from 'react-router';

import App from '../components/app';
import Playground from '../components/playground';

const routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="/playground" />
    <Route path="playground" component={Playground} />
    <Redirect from="*" to="playground" />
  </Route>
);

export default routes;
