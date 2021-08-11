/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { SearchIcon } from 'assets/icons/components';
import { COLORS, FONTS, SIZES } from 'assets/theme';
import { useHistory } from 'react-router-dom';
import useForm from 'utils/helpers/useForm';

const initialValue = {
  search: ''
};

const SearchBar: React.FC = () => {
  const history = useHistory();
  const [value, changeHandler] = useForm({ initialValue });
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
    `,
    submitButton: css`
      display: none;
    `
  };

  const searchSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.search) {
      const params = new URLSearchParams();
      params.append('title', value.search);
      history.push({ pathname: '/search', search: params.toString() });
    }
  };

  return (
    <form css={styles.container} onSubmit={searchSubmitHandler}>
      <div css={styles.searchIconContainer}>
        <SearchIcon {...styles.searchIcon} />
      </div>
      <input
        css={styles.searchInput}
        name="search"
        type="text"
        placeholder="Albums, Artists, or Podcasts"
        onChange={changeHandler}
        data-testid="input-form"
      />
      <button
        css={styles.submitButton}
        type="submit"
        data-testid="submit-button"
      >
        submit
      </button>
    </form>
  );
};

export default SearchBar;
