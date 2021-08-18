/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import SongList from 'components/tracks-list';
import SongListHeader from 'components/tracks-header';
import React from 'react';
import { useSearchTracks } from 'utils/apis/useSearchTracks';

const TrackListPage: React.FC = () => {
  const { tracks, loaded, error } = useSearchTracks();

  const styles = {
    container: css`
      min-height: 100vh;
      position: relative;
      display: grid;
      gap: 1rem;
      grid-template-rows: 5rem 1fr;
    `
  };

  if (error) return <h1 data-testid="error-alert">there is something wrong</h1>;

  if (!loaded) return <h1 data-testid="loading">loading..</h1>;

  // TODO: ADD STYLE AND CONNECTING COMPONENTS

  return (
    <div css={styles.container}>
      <SongListHeader />
      <SongList tracks={tracks} />
    </div>
  );
};

export default TrackListPage;
