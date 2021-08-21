/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import Layout from 'layout/PageWithMusicPlayer';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { Avatar } from 'assets/images';
import { LOGOUT_URL } from 'utils/apis/endpoints';
import { COLORS, FONTS } from 'assets/theme';

const AccountPage: React.FC = () => {
  const history = useHistory();
  const user = useSelector((state: RootState) => state.user.user);

  const logoutHandler = () => {
    const spotifyLogoutWindow = window.open(
      LOGOUT_URL,
      'Spotify Logout',
      'width=700,height=500'
    );

    return setTimeout(() => {
      spotifyLogoutWindow?.close();
      localStorage.clear();
      history.go(0);
    }, 2000);
  };

  const styles = {
    container: css`
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1rem;
    `,
    image: css`
      height: 8rem;
      width: 8rem;
      object-fit: cover;
      border-radius: 4rem;
    `,
    name: css`
      margin: 0;
      padding: 0;
      text-align: center;
      color: ${COLORS.primary};
      ${FONTS.h1}
    `,
    email: css`
      margin: 0;
      padding: 0;
      text-align: center;
      color: ${COLORS.darkblue};
      ${FONTS.h2}
    `,
    button: css`
      margin-top: 2rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 0.5rem;
      background-color: ${COLORS.lightblue};
      color: ${COLORS.primary};
      ${FONTS.h2}
    `
  };

  return (
    <Layout>
      <div css={styles.container}>
        <img
          css={styles.image}
          src={user.images[0]?.url ? user.images[0].url : Avatar}
          alt="avatar"
          data-testid="user-image"
        />
        <section>
          <p css={styles.name} data-testid="user-name">
            {user.name}
          </p>
          <p css={styles.email} data-testid="user-email">
            {user.email}
          </p>
        </section>
        <button type="button" css={styles.button} onClick={logoutHandler}>
          Sign out
        </button>
      </div>
    </Layout>
  );
};

export default AccountPage;
