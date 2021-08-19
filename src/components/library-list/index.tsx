/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import PlaylistCard from './Card';
import NewPlaylistForm from './Form';

interface Props {
  formState: boolean;
}

const LibraryList: React.FC<Props> = ({ formState }) => {
  const playlists = useSelector((state: RootState) => state.playlist.playlists);

  const styles = {
    container: css`
      padding: 0 10% 6rem 10%;
      display: grid;
      grid-auto-rows: 4rem;
      gap: 1rem;
      list-style: none;
    `
  };

  return (
    <ul css={styles.container}>
      {formState && <NewPlaylistForm />}
      {playlists.map((item) => (
        <PlaylistCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default LibraryList;
