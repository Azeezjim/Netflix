import React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import { Home, Browse, Signin, Signup } from './Pages';
import * as ROUTES from './constances/roustes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import {useAuthListner} from './hooks';

export default function App() {
  const {user} = useAuthListner();
  return (
    <Router>  
      <Switch>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSER } path={ROUTES.SIGN_IN} exact>
          <Signin />
      </IsUserRedirect>
      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSER } path={ROUTES.SIGN_UP} exact>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSER} exact>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSER} path={ROUTES.HOME} exact> 
          <Home />
        </IsUserRedirect>
        </Switch>  
    </Router>
  );
}
