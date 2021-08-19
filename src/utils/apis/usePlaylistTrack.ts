import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { useLocation } from 'react-router-dom';
import { PLAYLIST_TRACKS_URL } from 'utils/apis/endpoints';
import { setPlaylistTracks } from 'store/action-creators';
import { Playlists } from 'store/actions/payloads';

const usePlaylistTrack = () => {
  const dispatch = useDispatch();
  const token =
    useSelector((state: RootState) => state.user.token) ||
    window.localStorage.getItem('token');
  const playlists = useSelector((state: RootState) => state.playlist.playlists);
  const playlistId = useLocation().pathname.split('/')[2];
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [playlist, setPlaylist] = useState<Playlists>();

  useEffect(() => {
    if (playlistId && token) {
      axios({
        method: 'GET',
        url: PLAYLIST_TRACKS_URL(playlistId),
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          limit: 20
        }
      })
        .then((res) => {
          const data = res.data.items.map((item: any) => ({
            artist: item.track.artists[0].name,
            images: item.track.album.images,
            name: item.track.name,
            uri: item.track.uri
          }));

          const newPlaylist = playlists.filter(
            (item) => item.id === playlistId
          );

          dispatch(setPlaylistTracks(data));
          setPlaylist(newPlaylist[0]);
          setLoaded(true);
        })
        .catch(() => setError(true));
    }
  }, []);

  return { playlist, loaded, error };
};

export default usePlaylistTrack;
