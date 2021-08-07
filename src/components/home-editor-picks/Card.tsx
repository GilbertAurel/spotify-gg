/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';

const AlbumCard: React.FC = () => {
  const styles = {
    image: css`
      max-height: 9.4rem;
      max-width: 9.4rem;
      border-radius: 3px;
      object-fit: cover;
    `
  };

  return <img css={styles.image} src="https://picsum.photos/200" alt="album" />;
};

export default AlbumCard;
