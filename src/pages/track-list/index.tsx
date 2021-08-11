/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Layout from 'layout/PageWithMusicPlayer';
import { useSearchTracks } from 'utils/apis/useSearchTracks';

const TrackListPage: React.FC = () => {
  const { loaded, tracks } = useSearchTracks();

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
        <div css={styles.container} data-testid="item-wrapper">
          {tracks.map((item) => (
            <p key={item.uri}>{item.name}</p>
          ))}
        </div>
      </Layout>
    );
  }

  return <h1 data-testid="loading">loading..</h1>;
};

export default TrackListPage;
