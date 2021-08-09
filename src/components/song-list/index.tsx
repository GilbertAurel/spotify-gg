/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { Track } from 'store/actions/payloads';
import SongCard from './Card';

interface Props {
  tracks: Track[];
}

const SongList: React.FC<Props> = ({ tracks }) => {
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
      {tracks.map((item: Track) => (
        <SongCard item={item} />
      ))}
    </div>
  );
};

export default SongList;
