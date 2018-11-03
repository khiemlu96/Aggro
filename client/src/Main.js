import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const Main = () => (

  <main>
    <Switch>
      <Route exact path='/' component={Landing}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
    </Switch>
  </main>
)

export default Main;
