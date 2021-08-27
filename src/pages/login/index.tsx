/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { hashSeparator } from 'utils/helpers/hashSeparator';
import { LOGIN_URL } from 'utils/apis/endpoints';
import Layout from 'layout/PageWithoutMusicPlayer';
import { COLORS, FONTS } from 'assets/theme';
import { LoginBackground, SpotifyLogo } from 'assets/images';
import LoginHeadline from 'components/login-headline';

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
      padding: 0 10%;
      position: relative;
      display: grid;
      grid-auto-rows: 5rem;
    `,
    whiteShader: css`
      height: 100%;
      width: 100%;
      position: absolute;
      background: linear-gradient(transparent, rgba(255, 255, 255, 1) 70%);
      z-index: -1;
    `,
    background: css`
      height: 100%;
      width: 100%;
      position: absolute;
      object-fit: cover;
      z-index: -2;
    `,
    loginButton: css`
      position: absolute;
      bottom: 5rem;
      padding: 0.5rem 3rem;
      justify-self: center;
      background-color: ${COLORS.spotifyGreen};
      border: none;
      border-radius: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      img {
        height: 1rem;
        width: 1rem;
        object-fit: cover;
      }

      p {
        margin: 0;
        padding: 0;
        color: ${COLORS.white};
        ${FONTS.h2}
      }
    `
  };

  return (
    <Layout>
      <div css={styles.container}>
        <div css={styles.whiteShader} />
        <img css={styles.background} src={LoginBackground} alt="" />
        <LoginHeadline />
        <button css={styles.loginButton} type="button" onClick={loginHandler}>
          <img src={SpotifyLogo} alt="" />
          <p>Login with Spotify</p>
        </button>
      </div>
    </Layout>
  );
};

export default LoginPage;
