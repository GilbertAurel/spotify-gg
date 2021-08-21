import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  EDITOR_PICKS_URL,
  NEW_RELEASES_URL,
  PLAYLIST_URL,
  USER_DATA_URL
} from 'utils/apis/endpoints';
import {
  setEditorPicks,
  setLoginData,
  setNewReleases,
  setPlaylists
} from 'store/action-creators';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const initialHomeDataFetch = () => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const fetchUserData = (token: string, expires: string) =>
    axios({
      method: 'GET',
      url: USER_DATA_URL,
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        const { display_name: name, id, images, uri, email } = res.data;
        const user = { name, id, images, uri, email };
        dispatch(setLoginData(user, token, expires));
      })
      .catch(() => {
        window.localStorage.clear();
        history.go(0);
      });

  const fetchNewReleases = (token: string) =>
    axios({
      method: 'GET',
      url: NEW_RELEASES_URL,
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        limit: 10
      }
    }).then((res) => {
      const data = res.data.albums.items.map((item: any) => ({
        artist: item.artists[0].name,
        images: item.images,
        name: item.name,
        uri: item.uri
      }));

      dispatch(setNewReleases(data));
    });

  const fetchEditorPicks = (token: string) =>
    axios({
      method: 'GET',
      url: EDITOR_PICKS_URL,
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        limit: 10
      }
    }).then((res) => {
      const data = res.data.playlists.items.map((item: any) => ({
        name: item.name,
        images: item.images,
        trackUrl: item.tracks.href
      }));

      dispatch(setEditorPicks(data));
    });

  const fetchPlaylists = (token: string) =>
    axios({
      method: 'GET',
      url: PLAYLIST_URL,
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      const data = res.data.items.map((item: any) => ({
        name: item.name,
        image: item.images,
        id: item.id,
        owner: item.owner.display_name,
        type: item.type,
        description: item.description
      }));

      dispatch(setPlaylists(data));
    });

  useEffect(() => {
    const expires = window.localStorage.getItem('expires');
    const token = window.localStorage.getItem('token');

    if (token && expires) {
      Promise.all([
        fetchUserData(token, expires),
        fetchNewReleases(token),
        fetchEditorPicks(token),
        fetchPlaylists(token)
      ])
        .then(() => setLoaded(true))
        .catch(() => setError(true));
    }
  }, []);

  return { error, loaded };
};

export default initialHomeDataFetch;
