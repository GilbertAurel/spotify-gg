/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';

const SongListHeader: React.FC = () => {
  const styles = {
    container: css`
      padding: 0 10%;
      display: grid;
      justify-content: center;
      align-content: flex-end;
      box-shadow: 0px 2px 1px 2px rgba(0, 0, 255, 0.2);
      background-color: ${COLORS.white};
    `,
    title: css`
      margin: 0 0 1rem 0;
      padding: 0;
      color: ${COLORS.primary};
      ${FONTS.h2}
    `
  };
  return (
    <div css={styles.container}>
      <h1 css={styles.title}>Track List</h1>
    </div>
  );
};

export default SongListHeader;
