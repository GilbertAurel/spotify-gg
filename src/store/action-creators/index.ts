import { ActionTypes } from 'store/action-types';
import { Dispatch } from 'redux';
import { Actions, Track, User } from 'store/actions';

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
