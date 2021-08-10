import React, { lazy, LazyExoticComponent } from 'react';

export type IRoutes = {
  path: string;
  component: LazyExoticComponent<React.FC>;
  exact: boolean;
};

export const PAGES: IRoutes[] = [
  {
    path: '/home',
    exact: true,
    component: lazy(() => import('pages/home'))
  },
  {
    path: '/playlists',
    exact: true,
    component: lazy(() => import('pages/playlist-list'))
  },
  {
    path: '/playlist/:id',
    exact: false,
    component: lazy(() => import('pages/playlist-details'))
  },
  {
    path: '/search',
    exact: false,
    component: lazy(() => import('pages/track-list'))
  }
];
