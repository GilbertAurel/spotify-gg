/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import { Track } from 'store/actions';

interface Props {
  track: Track;
}

const SongCard: React.FC<Props> = ({ track }) => {
  const { artist, name, images } = track;

  const styles = {
    container: css`
      min-width: 7rem;
      height: 9.5rem;
      padding: 0.625rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: 1px solid ${COLORS.lightgray};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));
      border-radius: 0.4rem;
    `,
    image: css`
      width: 100%;
      height: 6rem;
      align-self: center;
      border-radius: 3px;
      object-fit: cover;
    `,
    title: css`
      margin: 0;
      padding: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: ${COLORS.primary};
      ${FONTS.p}
    `,
    artist: css`
      margin: 0;
      padding: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: ${COLORS.darkblue};
      ${FONTS.p}
    `
  };

  return (
    <div css={styles.container}>
      <img css={styles.image} src={images[2].url} alt="album" />
      <section>
        <p css={styles.title}>{name}</p>
        <p css={styles.artist}>{artist}</p>
      </section>
    </div>
  );
};

export default SongCard;
