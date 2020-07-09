import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from '../modules/main';
import { Menu } from '../modules/menu';

export const App = () => {
  return (
    <Switch>
      <Route path='/' exact>
        <Main />
      </Route>
      <Route path='/menu' exact>
        <Menu />
      </Route>
    </Switch>    
  );
};
