/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import Layout from 'layout/PageWithMusicPlayer';
import LibraryList from 'components/library-list';
import LibraryHeader from 'components/library-header';

const PlaylistPage: React.FC = () => {
  const [toggleForm, setToggleForm] = useState(false);

  const toggleFormHandler = () => setToggleForm(!toggleForm);

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
        <LibraryHeader toggleHandler={toggleFormHandler} />
        <LibraryList formState={toggleForm} />
      </div>
    </Layout>
  );
};

export default PlaylistPage;
