import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setPlaylistTracks } from 'store/action-creators';
import { Track } from 'store/actions/payloads';
import { RootState } from 'store/reducers';
import { PLAYLIST_TRACKS_URL } from 'utils/apis/endpoints';

const PlaylistDetailPage: React.FC = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: RootState) => state.user.token);
  const playlistId = useLocation().pathname.split('/')[2];
  const [tracks, setTracks] = useState([]);

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
      }).then((res) => {
        const data = res.data.items.map((item: any) => ({
          artist: item.track.artists[0].name,
          images: item.track.album.images,
          name: item.track.name,
          uri: item.track.uri
        }));

        setTracks(data);
        dispatch(setPlaylistTracks(data));
      });
    }
  }, []);

  return (
    <div>
      {tracks.map((item: Track) => (
        <div>
          <img src={item.images[2].url} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PlaylistDetailPage;
