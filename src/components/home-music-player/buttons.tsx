/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { ForwardIcon, PlayIcon, RewindIcon } from 'assets/icons/components';
import { COLORS } from 'assets/theme';

const PlayerButtons: React.FC = () => {
  const styles = {
    container: css`
      display: flex;
      flex-direction: row;
      gap: 1rem;
    `,
    rewindIcon: {
      height: '1.5rem',
      width: '1.5rem',
      fill: COLORS.darkblue
    },
    playIcon: {
      height: '1.5rem',
      width: '1.5rem',
      fill: COLORS.primary
    },
    forwardIcon: {
      height: '1.5rem',
      width: '1.5rem',
      fill: COLORS.darkblue
    }
  };

  return (
    <div css={styles.container}>
      <RewindIcon {...styles.rewindIcon} />
      <PlayIcon {...styles.playIcon} />
      <ForwardIcon {...styles.forwardIcon} />
    </div>
  );
};

export default PlayerButtons;
