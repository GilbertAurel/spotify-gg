/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Vinyl } from 'assets/images';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

const PlayerDetails: React.FC = () => {
  const track = useSelector((state: RootState) => state.playlist.selectedTrack);
  const styles = {
    container: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      overflow: hidden;
      gap: 0.5rem;
    `,
    image: css`
      height: 3.375rem;
      width: 3.375rem;
      object-fit: contain;
      border-radius: 0.3rem;
    `,
    details: css`
      flex: 1;
      overflow: hidden;
    `,
    title: css`
      margin: 0;
      padding: 0;
      color: ${COLORS.primary};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      ${FONTS.h2}
    `,
    artist: css`
      margin: 0;
      padding: 0;
      color: ${COLORS.darkblue};
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      ${FONTS.p}
    `
  };

  return (
    <div css={styles.container}>
      <img css={styles.image} src={track.images[0].url || Vinyl} alt="" />
      <section css={styles.details}>
        <p css={styles.title}>{track.name}</p>
        <p css={styles.artist}>{track.artist || 'No song played'}</p>
      </section>
    </div>
  );
};

export default PlayerDetails;
