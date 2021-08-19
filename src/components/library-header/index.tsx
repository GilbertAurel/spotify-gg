/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { AddIcon } from 'assets/icons/components';
import { COLORS, FONTS, SIZES } from 'assets/theme';
import React from 'react';

interface Props {
  toggleHandler: () => void;
}

const LibraryHeader: React.FC<Props> = ({ toggleHandler }) => {
  const styles = {
    container: css`
      padding: 0 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0px 2px 1px 1px rgba(0, 0, 255, 0.05);
      background-color: ${COLORS.white};
    `,
    title: css`
      color: ${COLORS.primary};
      ${FONTS.h2}
    `,
    button: css`
      background-color: transparent;
      border: none;
    `,
    addIcon: {
      height: SIZES.icon,
      width: SIZES.icon,
      fill: COLORS.blue
    }
  };

  return (
    <div css={styles.container}>
      <h1 css={styles.title}>Your Library</h1>
      <button
        type="button"
        css={styles.button}
        onClick={toggleHandler}
        data-testid="add-button"
      >
        <AddIcon {...styles.addIcon} />
      </button>
    </div>
  );
};

export default LibraryHeader;
