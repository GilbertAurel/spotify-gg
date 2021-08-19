/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { useHistory } from 'react-router-dom';
import useForm from 'utils/helpers/useForm';
import { CREATE_NEW_PLAYLIST } from 'utils/apis/endpoints';

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
        .post(CREATE_NEW_PLAYLIST(user.id), newPlaylist, config)
        .then((res) => history.push({ pathname: `/library/${res.data.id}` }));
    }
  };

  const styles = {
    container: css``
  };

  return (
    <li css={styles.container}>
      <form onSubmit={submitHanlder}>
        <input
          type="text"
          name="title"
          value={value.title}
          onChange={inputChangeHandler}
          placeholder="playlist name"
        />
        <input
          type="text"
          name="description"
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
