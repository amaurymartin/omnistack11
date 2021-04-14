import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/login';
import NewUser from './pages/users/new';
import ShowUser from './pages/users/show';
import NewOrganization from './pages/organizations/new';
import NewIncident from './pages/incidents/new';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/users/new" component={NewUser} />
        <Route path="/users/key" component={ShowUser} />
        <Route path="/organizations/new" component={NewOrganization} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
