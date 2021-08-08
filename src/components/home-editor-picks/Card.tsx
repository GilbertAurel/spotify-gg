/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { EditorPicks } from 'store/actions/payloads';

interface Props {
  album: EditorPicks;
}

const AlbumCard: React.FC<Props> = ({ album }) => {
  const { images } = album;

  const styles = {
    image: css`
      max-height: 9.4rem;
      max-width: 9.4rem;
      border-radius: 3px;
      object-fit: cover;
    `
  };

  return <img css={styles.image} src={images[0].url} alt="album" />;
};

export default AlbumCard;
