import { ActionTypes } from 'store/action-types';
import { EditorPicks, Playlists, Track, User } from './payloads';

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

interface SelectedPlaylistsAction {
  type: ActionTypes.SET_SELECTED_PLAYLIST;
  payload: Playlists;
}

interface PlaylistTracksAction {
  type: ActionTypes.SET_PLAYLIST_TRACKS;
  payload: Track[];
}

export type Actions =
  | LoginAction
  | NewReleasesAction
  | EditorPicksAction
  | PlaylistsAction
  | SelectedPlaylistsAction
  | PlaylistTracksAction;
