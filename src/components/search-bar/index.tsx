/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { SearchIcon } from 'assets/icons/components';
import { COLORS, FONTS, SIZES } from 'assets/theme';

const SearchBar: React.FC = () => {
  const styles = {
    container: css`
      padding: 0 10%;
      grid-row: span 1;
      position: relative;
      display: flex;
      align-items: center;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
    `,
    searchIconContainer: css`
      position: absolute;
      top: 35%;
      left: 15%;
      transform: translateX(-50%);
    `,
    searchIcon: {
      height: SIZES.icon,
      width: SIZES.icon,
      fill: COLORS.placeholder
    },
    searchInput: css`
      width: 100%;
      padding: 0.6rem 3rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: none;
      border-radius: 1rem;
      background-color: ${COLORS.lightgray};
      color: ${COLORS.placeholder};
      ${FONTS.p}
    `
  };

  return (
    <form css={styles.container}>
      <div css={styles.searchIconContainer}>
        <SearchIcon {...styles.searchIcon} />
      </div>
      <input
        css={styles.searchInput}
        type="text"
        placeholder="Albums, Artists, or Podcasts"
      />
    </form>
  );
};

export default SearchBar;
