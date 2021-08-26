import { ActionTypes } from 'store/action-types';
import { Dispatch } from 'redux';
import { EditorPicks, Playlists, Track, User } from 'store/actions/payloads';
import { Actions } from 'store/actions';

type DispatchType = Dispatch<Actions>;

export const setLoginData =
  (user: User, token: string, expires: string) => (dispatch: DispatchType) => {
    dispatch({
      type: ActionTypes.LOGIN_AUTH,
      payload: { token, expires, user }
    });
  };

export const setNewReleases = (tracks: Track[]) => (dispatch: DispatchType) => {
  dispatch({
    type: ActionTypes.SET_NEW_RELEASES,
    payload: tracks
  });
};

export const setEditorPicks =
  (albums: EditorPicks[]) => (dispatch: DispatchType) => {
    dispatch({
      type: ActionTypes.SET_EDITOR_PICKS,
      payload: albums
    });
  };

export const setPlaylists =
  (playlists: Playlists[]) => (dispatch: DispatchType) => {
    dispatch({
      type: ActionTypes.SET_PLAYLIST,
      payload: playlists
    });
  };

export const setSelectedPlaylists =
  (playlist: Playlists) => (dispatch: DispatchType) => {
    dispatch({
      type: ActionTypes.SET_SELECTED_PLAYLIST,
      payload: playlist
    });
  };

export const setSelectedTrack = (track: Track) => (dispatch: DispatchType) => {
  dispatch({
    type: ActionTypes.SET_SELECTED_TRACK,
    payload: track
  });
};

export const openTrackMenu = (track: Track) => (dispatch: DispatchType) => {
  dispatch({
    type: ActionTypes.SET_TRACK_MENU,
    payload: track
  });
};

export const closeTrackMenu = () => (dispatch: DispatchType) => {
  dispatch({
    type: ActionTypes.RESET_TRACK_MENU
  });
};

export const setPlaylistTracks =
  (tracks: Track[]) => (dispatch: DispatchType) => {
    dispatch({
      type: ActionTypes.SET_PLAYLIST_TRACKS,
      payload: tracks
    });
  };

export const addPlaylistTracks =
  (tracks: Track[]) => (dispatch: DispatchType) => {
    dispatch({
      type: ActionTypes.ADD_PLAYLIST_TRACKS,
      payload: tracks
    });
  };
