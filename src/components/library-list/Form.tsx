/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { useHistory } from 'react-router-dom';
import useForm from 'utils/helpers/useForm';
import { CREATE_NEW_PLAYLIST_URL } from 'utils/apis/endpoints';
import { COLORS, FONTS } from 'assets/theme';

const initialFormData = {
  title: '',
  description: ''
};

const NewPlaylistForm: React.FC = () => {
  const history = useHistory();
  const { token, user } = useSelector((state: RootState) => state.user);
  const [value, inputChangeHandler] = useForm({
    initialValue: initialFormData
  });

  const submitHanlder = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value.title.length > 10 && value.description.length > 20) {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Accept: 'application/json'
        }
      };

      const newPlaylist = {
        name: value.title,
        description: value.description,
        public: false
      };

      axios
        .post(CREATE_NEW_PLAYLIST_URL(user.id), newPlaylist, config)
        .then(() => history.push({ pathname: `/home` }));
    }
  };

  const styles = {
    container: css`
      grid-row: span 2;
    `,
    innerContainer: css`
      display: flex;
      flex-direction: column;
      gap: 1rem;

      button {
        display: none;
      }
    `,
    title: css`
      margin: 0;
      padding: 0;
      color: ${COLORS.primary};
      ${FONTS.h2}
    `,
    input: css`
      width: 100%;
      padding: 0.6rem 1rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border: none;
      border-radius: 1rem;
      background-color: ${COLORS.lightgray};
      color: ${COLORS.placeholder};
      ${FONTS.p}

      :focus {
        outline: none;
      }
    `
  };

  return (
    <li css={styles.container}>
      <form css={styles.innerContainer} onSubmit={submitHanlder}>
        <p css={styles.title}>Create new playlist</p>
        <input
          type="text"
          name="title"
          css={styles.input}
          value={value.title}
          onChange={inputChangeHandler}
          placeholder="playlist name"
        />
        <input
          type="text"
          name="description"
          css={styles.input}
          value={value.description}
          onChange={inputChangeHandler}
          placeholder="description"
        />
        <button type="submit">submit</button>
      </form>
    </li>
  );
};

export default NewPlaylistForm;
