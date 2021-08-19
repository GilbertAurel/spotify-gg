/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import Layout from 'layout/PageWithMusicPlayer';
import LibraryList from 'components/library-list';
import LibraryHeader from 'components/library-header';
import usePlaylists from 'utils/apis/usePlaylists';

const PlaylistPage: React.FC = () => {
  const { error, loaded } = usePlaylists();
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

  if (error) return <h1>there is something wrong</h1>;

  if (!loaded) return <h1>loading..</h1>;

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
