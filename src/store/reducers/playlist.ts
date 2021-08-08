import { ActionTypes } from 'store/action-types';
import { EditorPicks, Playlists, Track } from 'store/actions/payloads';
import { Actions } from 'store/actions';

type State = {
  newReleases: Track[];
  editorPicks: EditorPicks[];
  playlists: Playlists[];
  tracks: Track[];
};

const initialState: State = {
  newReleases: [],
  editorPicks: [],
  playlists: [],
  tracks: []
};

const playlistReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SET_NEW_RELEASES:
      return {
        ...state,
        newReleases: action.payload
      };
    case ActionTypes.SET_EDITOR_PICKS:
      return {
        ...state,
        editorPicks: action.payload
      };
    case ActionTypes.SET_PLAYLIST:
      return {
        ...state,
        playlists: action.payload
      };
    case ActionTypes.SET_PLAYLIST_TRACKS:
      return {
        ...state,
        tracks: action.payload
      };
    default:
      return state;
  }
};

export default playlistReducer;
