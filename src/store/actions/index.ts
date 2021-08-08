import { ActionTypes } from 'store/action-types';

export interface User {
  name: string;
  id: string;
  images: any[];
  uri: string;
}

interface LoginAction {
  type: ActionTypes.LOGIN_AUTH;
  payload: {
    token: string;
    expires: string;
    user: User;
  };
}

export type Actions = LoginAction;
