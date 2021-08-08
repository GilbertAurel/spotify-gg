import { ActionTypes } from 'store/action-types';
import { Actions, EditorPicks, Playlists, Track } from 'store/actions';

type State = {
  newReleases: Track[];
  editorPicks: EditorPicks[];
  playlists: Playlists[];
};

const initialState: State = {
  newReleases: [],
  editorPicks: [],
  playlists: []
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
    default:
      return state;
  }
};

export default playlistReducer;
