/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const SearchHeader: React.FC = () => {
  const styles = {
    container: css``
  };

  return (
    <div css={styles.container}>
      <div>
        <p data-testid="header-label">Search</p>
        <form onSubmit={() => console.log('submit')}>
          <input type="text" name="search" data-testid="search-bar" />
        </form>
      </div>
    </div>
  );
};

export default SearchHeader;
