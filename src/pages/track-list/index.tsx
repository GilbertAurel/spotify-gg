/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Layout from 'layout/PageWithMusicPlayer';

const TrackListPage: React.FC = () => {
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
      <div css={styles.container}>test</div>
    </Layout>
  );
};

export default TrackListPage;
