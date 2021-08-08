import { ActionTypes } from 'store/action-types';
import { Actions, User } from 'store/actions';

type State = {
  token: string;
  expires: string;
  user: User;
};

const initialState: State = {
  token: '',
  expires: '',
  user: {
    name: '',
    id: '',
    images: [],
    uri: '',
    email: ''
  }
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
