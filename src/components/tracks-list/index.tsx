/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { Track } from 'store/actions/payloads';
import TrackCard from './Card';

interface Props {
  tracks: Track[];
}

const TrackList: React.FC<Props> = ({ tracks }) => {
  const styles = {
    container: css`
      padding: 0 10%;
      display: grid;
      grid-auto-rows: 3rem;
      gap: 1rem;
      list-style: none;
    `
  };

  return (
    <ul css={styles.container}>
      {tracks.map((item: Track) => (
        <TrackCard key={item.uri} item={item} />
      ))}
    </ul>
  );
};

export default TrackList;
