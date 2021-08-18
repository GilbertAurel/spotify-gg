/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS, SIZES } from 'assets/theme';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { MenuType } from './menus';

interface Props extends MenuType {
  clickHandler: (path: string) => void;
}

const Button: React.FC<Props> = ({ clickHandler, path, tag, name, Icon }) => {
  const currentPath = useLocation().pathname.split('/')[1];
  const buttonPath = path.split('/')[1];

  const styles = {
    container: css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: transparent;
      border: none;
      color: ${buttonPath === currentPath ? COLORS.primary : COLORS.blue};
      ${FONTS.p}
    `,
    icon: {
      height: SIZES.icon,
      width: SIZES.icon,
      fill: buttonPath === currentPath ? COLORS.primary : COLORS.blue
    }
  };

  return (
    <li>
      <button
        type="button"
        onClick={() => clickHandler(path)}
        css={styles.container}
        data-testid={tag}
      >
        <Icon style={styles.icon} />
        {name}
      </button>
    </li>
  );
};

export default Button;
