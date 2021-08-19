import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Track } from 'store/actions/payloads';
import { RootState } from 'store/reducers';
import { SEARCH_URL } from './endpoints';

export const useSearchTracks = () => {
  const token = useSelector((state: RootState) => state.user.token);
  const searchInput = new URLSearchParams(window.location.search).get('title');
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const fetchSearch = () =>
    axios({
      method: 'GET',
      url: SEARCH_URL,
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        q: searchInput,
        type: 'track',
        limit: 15
      }
    })
      .then((res) => {
        const data = res.data.tracks.items.map((item: any) => ({
          name: item.name,
          images: item.album.images,
          artist: item.artists[0].name,
          uri: item.uri,
          duration: item.duration_ms
        }));

        setTracks(data);
      })
      .catch(() => setError(true));

  useEffect(() => {
    setLoaded(false);

    if (searchInput) {
      fetchSearch();
      return setLoaded(true);
    }

    setTracks([]);
    return setLoaded(true);
  }, []);

  return { loaded, tracks, error };
};
