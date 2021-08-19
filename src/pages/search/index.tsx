/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import TrackList from 'components/tracks-list';
import React from 'react';
import { useSearchTracks } from 'utils/apis/useSearchTracks';
import Layout from 'layout/PageWithMusicPlayer';
import SearchHeader from 'components/search-header';

const TrackListPage: React.FC = () => {
  const { tracks, loaded, error } = useSearchTracks();

  const styles = {
    container: css`
      flex: 1;
      position: relative;
      display: grid;
      gap: 1rem;
      grid-template-rows: 8rem 1fr;
    `
  };

  if (error) return <h1 data-testid="error-alert">there is something wrong</h1>;

  if (!loaded) return <h1 data-testid="loading">loading..</h1>;

  return (
    <Layout>
      <div css={styles.container}>
        <SearchHeader />
        {tracks.length > 0 ? <TrackList tracks={tracks} /> : <p>empty list</p>}
      </div>
    </Layout>
  );
};

export default TrackListPage;
