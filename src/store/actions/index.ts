import { ActionTypes } from 'store/action-types';

export interface User {
  name: string;
  id: string;
  images: any[];
  uri: string;
  email: string;
}

export interface Track {
  name: string;
  images: any[];
  artist: string;
  uri: string;
  duration?: string;
}

export interface EditorPicks {
  name: string;
  images: any[];
  trackUrl: string;
}

export interface Playlists {
  name: string;
  image: any[];
  id: string;
  description: string;
}

interface LoginAction {
  type: ActionTypes.LOGIN_AUTH;
  payload: {
    token: string;
    expires: string;
    user: User;
  };
}

interface NewReleasesAction {
  type: ActionTypes.SET_NEW_RELEASES;
  payload: Track[];
}

interface EditorPicksAction {
  type: ActionTypes.SET_EDITOR_PICKS;
  payload: EditorPicks[];
}

interface PlaylistsAction {
  type: ActionTypes.SET_PLAYLIST;
  payload: Playlists[];
}

export type Actions =
  | LoginAction
  | NewReleasesAction
  | EditorPicksAction
  | PlaylistsAction;
