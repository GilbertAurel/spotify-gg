/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS } from 'assets/theme';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { LOGOUT_URL } from 'utils/apis/endpoints';
import Button from './Button';
import { BUTTONS } from './buttons';
import Profile from './Profile';

interface Props {
  toggleMenu: () => void;
}

const SideMenu: React.FC<Props> = ({ toggleMenu }) => {
  const history = useHistory();

  const onClickHandler = (name: string, path: string) => {
    if (name === 'sign out') {
      const spotifyLogoutWindow = window.open(
        LOGOUT_URL,
        'Spotify Logout',
        'width=700,height=500'
      );

      setTimeout(() => {
        spotifyLogoutWindow?.close();
        localStorage.clear();
        return history.go(0);
      }, 2000);
    }

    return history.push({ pathname: path });
  };

  const styles = {
    container: css`
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      display: flex;
      justify-content: flex-end;
    `,
    shader: css`
      flex: 1;
      height: 100%;
      background-color: ${COLORS.frostedWhite};
    `,
    innerContainer: css`
      height: 100%;
      width: 60%;
      min-width: 15rem;
      max-width: 25rem;
      padding: 2rem 1.5rem;
      display: grid;
      grid-auto-rows: minmax(4rem, max-content);
      gap: 1rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background-color: ${COLORS.white};
    `
  };

  return (
    <div css={styles.container}>
      <div css={styles.shader} onClick={toggleMenu} role="presentation" />
      <div css={styles.innerContainer}>
        <Profile />
        {BUTTONS.map((button) => (
          <Button
            key={button.name}
            clickHandler={onClickHandler}
            name={button.name}
            Icon={button.Icon}
            path={button.path}
          />
        ))}
      </div>
    </div>
  );
};

export default SideMenu;
