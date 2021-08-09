/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { useLocation } from 'react-router-dom';
import { PLAYLIST_TRACKS_URL } from 'utils/apis/endpoints';
import { setPlaylistTracks } from 'store/action-creators';
import Layout from 'layout/PageWithMusicPlayer';
import SongList from 'components/song-list';
import SongListHeader from 'components/song-list-header';

const PlaylistPage: React.FC = () => {
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

  const styles = {
    container: css`
      min-height: 100vh;
      position: relative;
      display: grid;
      gap: 1rem;
      grid-template-rows: 5rem 1fr;
    `
  };

  return (
    <Layout>
      <div css={styles.container}>
        <SongListHeader />
        <SongList tracks={tracks} />
      </div>
    </Layout>
  );
};

export default PlaylistPage;
