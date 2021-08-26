export const URL =
  process.env.NODE_ENV === 'development'
    ? encodeURIComponent('http://localhost:3000')
    : encodeURIComponent('https://gg-spotify.vercel.app');

const scope = [
  'user-read-currently-playing',
  'playlist-modify-private',
  'playlist-modify-public',
  'playlist-read-private',
  'user-read-playback-state',
  'user-read-private',
  'user-read-email'
].join('%20');

export const LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_ID}&response_type=token&redirect_uri=${URL}&scope=${scope}`;

export const LOGOUT_URL = `https://accounts.spotify.com/en/logout`;

export const USER_DATA_URL = 'https://api.spotify.com/v1/me';

export const NEW_RELEASES_URL =
  'https://api.spotify.com/v1/browse/new-releases';

export const EDITOR_PICKS_URL =
  'https://api.spotify.com/v1/browse/featured-playlists';

export const PLAYLIST_URL = 'https://api.spotify.com/v1/me/playlists';

export const PLAYLIST_TRACKS_URL = (id: string) =>
  `https://api.spotify.com/v1/playlists/${id}/tracks`;

export const SEARCH_URL = 'https://api.spotify.com/v1/search';

export const CREATE_NEW_PLAYLIST_URL = (id: string) =>
  `https://api.spotify.com/v1/users/${id}/playlists`;

export const ADD_TO_PLAYLIST_URL = (id: string) =>
  `https://api.spotify.com/v1/playlists/${id}/tracks`;

export const REMOVE_FROM_PLAYLIST_URL = (id: string) =>
  `https://api.spotify.com/v1/playlists/${id}/tracks`;
