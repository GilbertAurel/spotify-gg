import { ActionTypes } from 'store/action-types';
import { Actions, EditorPicks, Track } from 'store/actions';

type State = {
  newReleases: Track[];
  editorPicks: EditorPicks[];
};

const initialState: State = {
  newReleases: [],
  editorPicks: []
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
    default:
      return state;
  }
};

export default playlistReducer;
