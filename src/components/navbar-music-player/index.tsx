/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { COLORS } from 'assets/theme';
import Navbar from 'components/navbar-menu';
import PlayerDetails from './details';
import PlayerButtons from './buttons';
import PlayerTracker from './tracker';

const NavbarMusicPlayer: React.FC = () => {
  const styles = {
    container: css`
      width: 100%;
      position: sticky;
      bottom: 0;
      display: flex;
      flex-direction: column;
    `,
    content: css`
      margin: 0.5rem 5%;
      padding: 0.5rem 0.8rem;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: ${COLORS.lightblue};
      border-radius: 0.5rem;
    `
  };

  return (
    <div css={styles.container}>
      <div css={styles.content}>
        <PlayerDetails />
        <PlayerButtons />
        <PlayerTracker />
      </div>
      <Navbar />
    </div>
  );
};

export default NavbarMusicPlayer;
