export const DEV_URL = encodeURIComponent('http://localhost:3000');
export const DEPLOYMENT_URL = encodeURIComponent(
  'https://gfe01103-spotify.netlify.app'
);

const scope = [
  'user-read-currently-playing',
  'playlist-modify-private',
  'playlist-modify-public',
  'playlist-read-private',
  'user-read-playback-state',
  'user-read-private',
  'user-read-email'
].join('%20');

export const LOGIN_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_ID}&response_type=token&redirect_uri=${DEV_URL}&scope=${scope}`;

export const LOGOUT_URL = `https://accounts.spotify.com/en/logout`;

export const USER_DATA_URL = 'https://api.spotify.com/v1/me';

export const NEW_RELEASES_URL =
  'https://api.spotify.com/v1/browse/new-releases';

export const EDITOR_PICKS_URL =
  'https://api.spotify.com/v1/browse/featured-playlists';
