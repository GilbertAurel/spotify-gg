/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { COLORS } from 'assets/theme';

import PlayerDetails from './details';
import PlayerButtons from './buttons';
import PlayerTracker from './tracker';

const NavbarMusicPlayer: React.FC = () => {
  const styles = {
    container: css`
      height: 5rem;
      width: 100%;
      position: sticky;
      bottom: 0;
      left: 0;
      display: flex;
      flex-direction: column;
      background-color: ${COLORS.white};
    `,
    content: css`
      flex: 1;
      padding: 0 10%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    `
  };

  return (
    <div css={styles.container}>
      <PlayerTracker />
      <div css={styles.content}>
        <PlayerDetails />
        <PlayerButtons />
      </div>
    </div>
  );
};

export default NavbarMusicPlayer;
