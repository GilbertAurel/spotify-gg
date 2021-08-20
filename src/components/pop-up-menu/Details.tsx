/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';
import { Track } from 'store/actions/payloads';

interface Props {
  track: Track;
}

const MenuDetails: React.FC<Props> = ({ track }) => {
  const styles = {
    container: css`
      grid-row: span 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
    `,
    image: css`
      height: 10rem;
      width: 10rem;
      object-fit: cover;
    `,
    title: css`
      margin: 0;
      padding: 0 20%;
      text-align: center;
      color: ${COLORS.primary};
      ${FONTS.h2}
    `,
    artist: css`
      margin: 0;
      padding: 0 20%;
      text-align: center;
      color: ${COLORS.primary};
      ${FONTS.p}
    `
  };

  return (
    <div css={styles.container}>
      <img css={styles.image} src={track.images[1].url} alt="" />
      <h1 css={styles.title}>{track.name}</h1>
      <p css={styles.artist}>{track.artist}</p>
    </div>
  );
};

export default MenuDetails;
