import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { useLocation } from 'react-router-dom';
import { PLAYLIST_TRACKS_URL } from 'utils/apis/endpoints';
import { setPlaylistTracks } from 'store/action-creators';

const usePlaylistTrack = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.user.token);
  const playlistId = useLocation().pathname.split('/')[2];
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

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

          dispatch(setPlaylistTracks(data));
          setLoaded(true);
        })
        .catch(() => setError(true));
    }
  }, []);

  return { loaded, error };
};

export default usePlaylistTrack;
