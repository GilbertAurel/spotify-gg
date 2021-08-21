import React, { lazy, LazyExoticComponent } from 'react';

export type IRoutes = {
  path: string;
  component: LazyExoticComponent<React.FC>;
  exact: boolean;
};

export const ROUTES: IRoutes[] = [
  {
    path: '/home',
    exact: true,
    component: lazy(() => import('pages/home'))
  },
  {
    path: '/library/:id',
    exact: false,
    component: lazy(() => import('pages/library-tracks'))
  },
  {
    path: '/library',
    exact: true,
    component: lazy(() => import('pages/library'))
  },
  {
    path: '/search',
    exact: false,
    component: lazy(() => import('pages/search'))
  },
  {
    path: '/account',
    exact: false,
    component: lazy(() => import('pages/account'))
  }
];
