/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { COLORS } from 'assets/theme';
import { MENUS } from './menus';
import MenuButton from './Button';

const Navbar: React.FC = () => {
  const history = useHistory();

  const redirectHandler = (path: string) => {
    history.push({ pathname: path });
  };

  const styles = {
    container: css`
      height: 3.125rem;
      margin: 0;
      padding: 0 10%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: ${COLORS.white};
      list-style: none;
      box-shadow: 0px -2px 1px 1px rgba(0, 0, 255, 0.05);
    `
  };

  return (
    <ul css={styles.container}>
      {MENUS.map((item) => (
        <MenuButton
          key={item.tag}
          clickHandler={redirectHandler}
          name={item.name}
          tag={item.tag}
          path={item.path}
          Icon={item.Icon}
        />
      ))}
    </ul>
  );
};

export default Navbar;
