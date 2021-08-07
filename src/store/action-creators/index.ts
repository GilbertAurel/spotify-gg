import { ActionTypes } from 'store/action-types';
import { Dispatch } from 'redux';
import { Actions } from 'store/actions';

type DispatchType = Dispatch<Actions>;

export const login =
  (user: any, token: string, expires: string) => (dispatch: DispatchType) => {
    dispatch({
      type: ActionTypes.LOGIN_AUTH,
      payload: { token, expires, user }
    });
  };
