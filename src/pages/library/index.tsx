/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Layout from 'layout/PageWithMusicPlayer';
import PlaylistList from 'components/library-list';
import PlaylistHeader from 'components/library-header';

const PlaylistPage: React.FC = () => {
  const styles = {
    container: css`
      flex: 1;
      position: relative;
      display: grid;
      gap: 1rem;
      grid-template-rows: 5rem 1fr;
    `
  };

  return (
    <Layout>
      <div css={styles.container}>
        <PlaylistHeader />
        <PlaylistList />
      </div>
    </Layout>
  );
};

export default PlaylistPage;
