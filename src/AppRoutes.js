import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import Home from './components/Home';

const UsersList = Loadable({
  loader: () =>
    import(/* webpackChunkName: "UsersList" */ './components/UsersList'),
  loading: () => <div>Loading...</div>,
});

const NotFound = Loadable({
  loader: () =>
    import(/* webpackChunkName: "NotFound" */ './components/NotFound'),
  loading: () => <div>Loading...</div>,
});

const AppRoutes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/users">
      <UsersList />
    </Route>
    <Route path="*">
      <NotFound />
    </Route>
  </Switch>
);

export default AppRoutes;
