/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';

interface Props {
  children?: React.ReactNode;
  title: string;
}

const HomeWidgetWithTitle: React.FC<Props> = ({ children, title }) => {
  const styles = {
    container: css`
      grid-row: span 3;
      display: grid;
      grid-template-rows: 20% auto;
    `,
    title: css`
      margin: 0;
      padding: 0 10%;
      align-self: center;
      color: ${COLORS.primary};
      ${FONTS.h2}
    `,
    horizontalScrollContent: css`
      width: 100%;
      padding: 0 10%;
      display: flex;
      gap: 1rem;
      overflow-x: scroll;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      scrollbar-width: none;

      ::-webkit-scrollbar {
        display: none;
      }
    `
  };
  return (
    <div css={styles.container}>
      <h1 css={styles.title}>{title}</h1>
      <div css={styles.horizontalScrollContent}>{children}</div>
    </div>
  );
};

export default HomeWidgetWithTitle;
