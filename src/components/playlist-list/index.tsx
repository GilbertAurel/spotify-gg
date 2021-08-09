/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import PlaylistCard from './Card';

const PlaylistList: React.FC = () => {
  const playlists = useSelector((state: RootState) => state.playlist.playlists);

  const styles = {
    container: css`
      padding: 0 10% 6rem 10%;
      display: grid;
      grid-auto-rows: 5rem;
      gap: 1rem;
    `
  };

  return (
    <div css={styles.container}>
      {playlists.map((item) => (
        <PlaylistCard item={item} />
      ))}
    </div>
  );
};

export default PlaylistList;
