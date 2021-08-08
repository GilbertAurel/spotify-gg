import { ActionTypes } from 'store/action-types';
import { Actions } from 'store/actions';

const initialState = {
  newReleases: []
};

const playlistReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.SET_NEW_RELEASES:
      return {
        ...state,
        newReleases: action.payload
      };
    default:
      return state;
  }
};

export default playlistReducer;
