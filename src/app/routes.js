import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App.react';
import Foo from './components/Foo.react';

const routes = (
  <Route path="/">
    <IndexRoute component={App} />
    <Route path="/foo" component={Foo} />
  </Route>
);

export default routes;