/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS } from 'assets/theme';
import React from 'react';

const PlayerTracker: React.FC = () => {
  const styles = {
    container: css`
      height: 0.25rem;
      width: 100%;
      background-color: ${COLORS.lightblue};
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;
    `,
    progress: css`
      height: 100%;
      width: 40%;
      background-color: ${COLORS.primary};
      border-top-left-radius: 5rem;
    `
  };

  return (
    <div css={styles.container}>
      <div css={styles.progress} />
    </div>
  );
};

export default PlayerTracker;
