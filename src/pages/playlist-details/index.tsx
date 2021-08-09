/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import Layout from 'layout/PageWithMusicPlayer';
import SongList from 'components/song-list';
import SongListHeader from 'components/song-list-header';
import usePlaylistTrack from 'utils/apis/usePlaylistTrack';

const PlaylistPage: React.FC = () => {
  const { loaded } = usePlaylistTrack();
  const tracks = useSelector((state: RootState) => state.playlist.tracks);

  const styles = {
    container: css`
      min-height: 100vh;
      position: relative;
      display: grid;
      gap: 1rem;
      grid-template-rows: 5rem 1fr;
    `
  };

  if (loaded) {
    return (
      <Layout>
        <div css={styles.container}>
          <SongListHeader />
          <SongList tracks={tracks} />
        </div>
      </Layout>
    );
  }

  return <h1>Loading..</h1>;
};

export default PlaylistPage;
