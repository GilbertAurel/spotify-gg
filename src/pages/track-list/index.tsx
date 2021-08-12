/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
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

  if (loaded && !error) {
    return (
      <div css={styles.container}>
        <div>
          <button type="button" data-testid="back-button">
            back button
          </button>
          <h1 data-testid="header-title">Search</h1>
        </div>
        <ul>
          {tracks.map((item) => (
            <li key={item.uri}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }

  return <h1 data-testid="loading">loading..</h1>;
};

export default TrackListPage;
