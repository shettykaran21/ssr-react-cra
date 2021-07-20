import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import UsersList from './components/UsersList';
import NotFound from './components/NotFound';

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
