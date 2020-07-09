import React, { FC } from 'react';

import { Header } from './header';
import { Features } from './features';
import { MenuExamples } from './menu-examples';
import { Order } from './order';
import { Reservation } from './reservation';
import { Footer } from './footer';

export const Main: FC = () => {
  return (
    <>
      <Header />
      <Features />
      <MenuExamples />
      <Order />
      <Reservation />
      <Footer />
    </>
  )
};
