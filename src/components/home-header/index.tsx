/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';

const HomeHeader: React.FC = () => {
  const styles = {
    container: css`
      padding: 0 10%;
      grid-row: span 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,
    headline: css`
      max-width: 20ch;
      color: ${COLORS.primary};
      ${FONTS.h1}
    `,
    photo: css`
      height: 3.75rem;
      width: 3.75rem;
      border-radius: 50%;
      background-color: lightgray;
    `
  };

  return (
    <div css={styles.container}>
      <h1 css={styles.headline}>Free Music Everyday Just For You!</h1>
      <img
        src="https://picsum.photos/200"
        alt="picsum placeholder"
        css={styles.photo}
      />
    </div>
  );
};

export default HomeHeader;
