import { ActionTypes } from 'store/action-types';
import { Actions } from 'store/actions';

const initialState = {
  token: '',
  expires: '',
  user: {}
};

const userReducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.LOGIN_AUTH:
      return {
        ...state,
        token: action.payload.token,
        expires: action.payload.expires,
        user: action.payload.user
      };

    default:
      return state;
  }
};

export default userReducer;
