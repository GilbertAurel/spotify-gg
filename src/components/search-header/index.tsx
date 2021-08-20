/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import SearchBar from 'components/search-bar';
import React from 'react';

const SearchHeader: React.FC = () => {
  const styles = {
    container: css`
      position: sticky;
      top: 0;
      display: grid;
      grid-template-rows: 3rem 5rem;
      box-shadow: 0px 2px 1px 1px rgba(0, 0, 255, 0.05);
      background-color: ${COLORS.white};
      z-index: 10;
    `,
    title: css`
      align-self: flex-end;
      margin: 0;
      padding: 0 10%;
      color: ${COLORS.primary};
      ${FONTS.h2}
    `
  };

  return (
    <div css={styles.container}>
      <h1 css={styles.title} data-testid="header-label">
        Search
      </h1>
      <SearchBar />
    </div>
  );
};

export default SearchHeader;
