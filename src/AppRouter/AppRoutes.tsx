import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Users } from '../Pages/Users';
import { ViewUser } from '../Pages/ViewUser';
import { EditeUser } from '../Pages/EditeUser';
const AppRoutes = () => (
   <Switch>
      <Route path="/ViewUser/:id" render={(props) => <ViewUser {...props} />} />
      <Route path="/EditeUser/:id" render={(props) => <EditeUser {...props} />} />
      <Route path="/" render={() => <Users />} />
      <Route render={() => <Redirect to="/" />} />
   </Switch>
);
export default AppRoutes;
