import { ActionTypes } from 'store/action-types';

interface LoginAction {
  type: ActionTypes.LOGIN_AUTH;
  payload: {
    token: string;
    expires: string;
    user: any;
  };
}

export type Actions = LoginAction;
