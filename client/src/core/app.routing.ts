import { lazy } from 'react';

import { RouteProps } from 'react-router-dom';

const MainPage = lazy(async () => import('../modules/main/main.component'));
const OrderPage = lazy(async () => import('../modules/order-page/order-page.component'));
const ReservationPage = lazy(async () => import('../modules/reservation-page/reservation-page.component'));
const MenuPage = lazy(async () => import('../modules/menu/menu.component'));

export const routes: RouteProps[] = [
  {
    path: '/',
    component: MainPage,
  },
  {
    path: '/menu',
    component: MenuPage,
  },
  {
    path: '/order',
    component: OrderPage,
  },
  {
    path: '/reservation',
    component: ReservationPage,
  },
].map((route) => ({ ...route, exact: true }));
