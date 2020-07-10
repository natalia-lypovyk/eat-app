import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Main } from '../modules/main';
import { Menu } from '../modules/menu';
import { ReservationPage } from '../modules/reservation-page';

export const App = () => {
  return (
    <Switch>
      <Route path='/' exact component={Main} />
      <Route path='/menu' exact component={Menu} />
      <Route path='/reservation' exact component={ReservationPage} />
      {/*<Route path='/order' exact component={OrderPage} />*/}
    </Switch>
  );
};
