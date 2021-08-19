/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Layout from 'layout/PageWithMusicPlayer';
import LibraryList from 'components/library-list';
import LibraryHeader from 'components/library-header';

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
        <LibraryHeader />
        <LibraryList />
      </div>
    </Layout>
  );
};

export default PlaylistPage;
