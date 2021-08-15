/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { hashSeparator } from 'utils/helpers/hashSeparator';
import { LOGIN_URL } from 'utils/apis/endpoints';
import Layout from 'layout/PageWithoutMusicPlayer';

const LoginPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token: token, expires_in: expires } = hashSeparator();
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('expires', expires);
      history.push('/home');
    }
  }, []);

  const loginHandler = () => {
    window.location.href = LOGIN_URL;
  };

  const styles = {
    container: css`
      min-height: 100vh;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    avatar: css`
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      object-fit: cover;
    `,
    loginButton: css`
      position: absolute;
      bottom: 5rem;
    `
  };

  return (
    <Layout>
      <div css={styles.container}>
        <img css={styles.avatar} src="http://placekitten.com/200/300" alt="" />
        <h1>GG.Spotify</h1>
        <p>*UIUX still in progress*</p>
        <button css={styles.loginButton} type="button" onClick={loginHandler}>
          login
        </button>
      </div>
    </Layout>
  );
};

export default LoginPage;
