/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';

const PlayerDetails: React.FC = () => {
  const styles = {
    container: css`
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 0.5rem;
    `,
    image: css`
      height: 3.375rem;
      width: 3.375rem;
      object-fit: contain;
      border-radius: 0.3rem;
    `,
    title: css`
      margin: 0;
      padding: 0;
      color: ${COLORS.primary};
      ${FONTS.h2}
    `,
    artist: css`
      margin: 0;
      padding: 0;
      color: ${COLORS.darkblue};
      ${FONTS.p}
    `
  };

  return (
    <div css={styles.container}>
      <img css={styles.image} src="https://picsum.photos/200" alt="album" />
      <section>
        <p css={styles.title}>Track title</p>
        <p css={styles.artist}>Artist</p>
      </section>
    </div>
  );
};

export default PlayerDetails;
