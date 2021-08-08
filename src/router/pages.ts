import React, { lazy, LazyExoticComponent } from 'react';

export type IRoutes = {
  path: string;
  component: LazyExoticComponent<React.FC>;
};

export const PAGES: IRoutes[] = [
  {
    path: '/home',
    component: lazy(() => import('pages/home'))
  },
  {
    path: '/playlist',
    component: lazy(() => import('pages/playlist'))
  }
];
