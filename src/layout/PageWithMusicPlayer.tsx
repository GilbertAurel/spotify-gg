/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import NavbarMusicPlayer from 'components/navbar-music-player';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const styles = {
    container: css`
      min-height: 100vh;
      width: 100vw;
    `,
    body: css`
      margin-bottom: 2rem;
      display: grid;
      position: relative;
      grid-auto-rows: minmax(5rem, auto);
      overflow-y: scroll;
    `
  };

  return (
    <div css={styles.container}>
      <div css={styles.body}>{children}</div>
      <NavbarMusicPlayer />
    </div>
  );
};

export default Layout;
