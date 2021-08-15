/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS } from 'assets/theme';
import React from 'react';

interface Props {
  children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const styles = {
    container: css`
      width: 100vw;
      display: grid;

      @media (min-width: 480px) {
        width: 480px;
        margin: auto;
        border-left: 1px solid ${COLORS.darkblue};
        border-right: 1px solid ${COLORS.darkblue};
      }
    `
  };

  return <div css={styles.container}>{children}</div>;
};

export default Layout;
