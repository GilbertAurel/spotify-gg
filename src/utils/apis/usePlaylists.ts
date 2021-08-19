import { useEffect, useState } from 'react';
import axios from 'axios';
import { PLAYLIST_URL } from 'utils/apis/endpoints';
import { setPlaylists } from 'store/action-creators';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

export const usePlaylists = () => {
  const token =
    useSelector((state: RootState) => state.user.token) ||
    window.localStorage.getItem('token');
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      axios({
        method: 'GET',
        url: PLAYLIST_URL,
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => {
          const data = res.data.items.map((item: any) => ({
            name: item.name,
            image: item.images,
            id: item.id,
            owner: item.owner.display_name,
            type: item.type,
            description: item.description
          }));

          dispatch(setPlaylists(data));
          setLoaded(true);
        })
        .catch(() => setError(true));
    }
  }, []);

  return { loaded, error };
};

export default usePlaylists;
