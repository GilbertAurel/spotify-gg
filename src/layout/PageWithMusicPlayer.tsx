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
      max-height: 50vh;
      width: 100vw;
      display: grid;
    `
  };

  return (
    <div css={styles.container}>
      {children}
      <NavbarMusicPlayer />
    </div>
  );
};

export default Layout;
