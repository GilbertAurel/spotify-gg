import { ActionTypes } from 'store/action-types';
import { EditorPicks, Playlists, Track } from 'store/actions/payloads';
import { Actions } from 'store/actions';

type State = {
  newReleases: Track[];
  editorPicks: EditorPicks[];
  playlists: Playlists[];
  selectedPlaylist: Playlists;
  tracks: Track[];
  selectedTrack: Track;
  openMenu: Track;
};

const initialState: State = {
  newReleases: [],
  editorPicks: [],
  playlists: [],
  selectedPlaylist: {
    name: '',
    description: '',
    id: '',
    image: [],
    owner: '',
    type: ''
  },
  tracks: [],
  selectedTrack: {
    artist: '',
    images: [{ url: '' }],
    name: '',
    uri: '',
    duration: ''
  },
  openMenu: {
    artist: '',
    images: [{ url: '' }],
    name: '',
    uri: '',
    duration: ''
  }
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
    case ActionTypes.SET_PLAYLIST:
      return {
        ...state,
        playlists: action.payload
      };
    case ActionTypes.SET_PLAYLIST_TRACKS:
      return {
        ...state,
        tracks: action.payload
      };
    case ActionTypes.SET_SELECTED_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.payload
      };
    case ActionTypes.SET_SELECTED_TRACK:
      return {
        ...state,
        selectedTrack: action.payload
      };
    case ActionTypes.SET_TRACK_MENU:
      return {
        ...state,
        openMenu: action.payload
      };
    case ActionTypes.RESET_TRACK_MENU:
      return {
        ...state,
        openMenu: initialState.openMenu
      };
    default:
      return state;
  }
};

export default playlistReducer;
