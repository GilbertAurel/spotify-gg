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
      position: absolute;
      bottom: 0;
      left: 0;
    `,
    progress: css`
      height: 100%;
      width: 70%;
      margin: 0 0.8rem;
      background-color: ${COLORS.blue};
    `
  };

  return (
    <div css={styles.container}>
      <div css={styles.progress} />
    </div>
  );
};

export default PlayerTracker;
