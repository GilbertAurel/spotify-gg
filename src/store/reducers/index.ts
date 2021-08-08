import { combineReducers } from '@reduxjs/toolkit';
import playlistReducer from './playlist';
import userReducer from './user';

export const reducers = combineReducers({
  user: userReducer,
  playlist: playlistReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
