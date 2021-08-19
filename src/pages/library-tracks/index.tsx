/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import Layout from 'layout/PageWithMusicPlayer';
import TrackList from 'components/tracks-list';
import TracksHeader from 'components/tracks-header';
import usePlaylistTrack from 'utils/apis/usePlaylistTrack';

const PlaylistPage: React.FC = () => {
  const { playlist, loaded, error } = usePlaylistTrack();
  const tracks = useSelector((state: RootState) => state.playlist.tracks);

  const styles = {
    container: css`
      flex: 1;
      position: relative;
      display: grid;
      gap: 1rem;
      grid-template-rows: 15rem 1fr;
    `
  };

  if (error) return <h1>Something went wrong...</h1>;

  if (!loaded) return <h1>Loading..</h1>;

  return (
    <Layout>
      <div css={styles.container}>
        <TracksHeader playlist={playlist} />
        <TrackList tracks={tracks} />
      </div>
    </Layout>
  );
};

export default PlaylistPage;
