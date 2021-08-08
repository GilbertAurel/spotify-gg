import { ActionTypes } from 'store/action-types';
import { Actions } from 'store/actions';

const initialState = {
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
