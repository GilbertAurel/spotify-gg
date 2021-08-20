/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { hashSeparator } from 'utils/helpers/hashSeparator';
import { LOGIN_URL } from 'utils/apis/endpoints';
import Layout from 'layout/PageWithoutMusicPlayer';
import { COLORS, FONTS } from 'assets/theme';

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

  const loginHandler = () => window.location.replace(LOGIN_URL);

  const styles = {
    container: css`
      min-height: 100vh;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
    `,
    avatar: css`
      height: 5rem;
      width: 5rem;
      border-radius: 50%;
      object-fit: cover;
    `,
    title: css`
      margin: 0;
      padding: 0;
      color: ${COLORS.darkblue};
      ${FONTS.h1}
    `,
    notes: css`
      margin: 0;
      padding: 0 3rem;
      color: ${COLORS.primary};
      ${FONTS.p}
      text-align: center;
    `,
    loginButton: css`
      position: absolute;
      bottom: 5rem;
      padding: 1rem 3rem;
      background-color: ${COLORS.lightblue};
      color: ${COLORS.primary};
      border: none;
      border-radius: 2rem;
      ${FONTS.h2}
    `
  };

  return (
    <Layout>
      <div css={styles.container}>
        <img css={styles.avatar} src="http://placekitten.com/200/300" alt="" />
        <h1 css={styles.title}>GG.Spotify</h1>
        <p css={styles.notes}>
          *please use mobile view for better experiences*
        </p>
        <p css={styles.notes}>
          *there might be some elements not compatible with desktop view*
        </p>
        <button css={styles.loginButton} type="button" onClick={loginHandler}>
          login
        </button>
      </div>
    </Layout>
  );
};

export default LoginPage;
