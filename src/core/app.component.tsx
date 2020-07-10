import React, { FC, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './app.routing';

import { Nav } from '../modules/main/nav';

export const App: FC = () => {
  return (
    <Suspense fallback={<div />}>
      <Nav />
      <Switch>
        {routes.map((route) => (
          <Route {...route} key={route.path as string} />
        ))}
      </Switch>
    </Suspense>
  );
};
