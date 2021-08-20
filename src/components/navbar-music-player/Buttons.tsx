/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { PlayIcon } from 'assets/icons/components';
import { COLORS, SIZES } from 'assets/theme';

const PlayerButtons: React.FC = () => {
  const styles = {
    container: css`
      margin: 0 1rem;
      display: flex;
      flex-direction: row;
      gap: 1rem;
    `,
    rewindIcon: {
      height: SIZES.icon,
      width: SIZES.icon,
      fill: COLORS.darkblue
    },
    playIcon: {
      height: SIZES.icon,
      width: SIZES.icon,
      fill: COLORS.primary
    },
    forwardIcon: {
      height: SIZES.icon,
      width: SIZES.icon,
      fill: COLORS.darkblue
    }
  };

  return (
    <div css={styles.container}>
      <PlayIcon {...styles.playIcon} />
    </div>
  );
};

export default PlayerButtons;
