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
    `,
    progress: css`
      height: 100%;
      width: 40%;
      background-color: ${COLORS.primary};
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    `
  };

  return (
    <div css={styles.container}>
      <div css={styles.progress} />
    </div>
  );
};

export default PlayerTracker;
