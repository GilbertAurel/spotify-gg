import { ActionTypes } from 'store/action-types';

export interface User {
  name: string;
  id: string;
  images: any[];
  uri: string;
}

export interface Track {
  name: string;
  images: any[];
  artist: string;
  uri: string;
  duration?: string;
}

interface LoginAction {
  type: ActionTypes.LOGIN_AUTH;
  payload: {
    token: string;
    expires: string;
    user: User;
  };
}

interface NewReleases {
  type: ActionTypes.SET_NEW_RELEASES;
  payload: Track[];
}

export type Actions = LoginAction | NewReleases;
