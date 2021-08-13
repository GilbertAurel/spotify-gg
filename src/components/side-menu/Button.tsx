/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS, SIZES } from 'assets/theme';
import React from 'react';
import { ButtonType } from './buttons';

interface Props extends ButtonType {
  clickHandler: (name: string, path: string) => void;
}

const Button: React.FC<Props> = ({ clickHandler, name, Icon, path }) => {
  const styles = {
    container: css`
      min-height: 3rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      border-top: 1px solid ${COLORS.lightgray};
    `,
    icon: {
      height: SIZES.icon,
      width: SIZES.icon,
      fill: COLORS.blue
    },
    label: css`
      margin: 0;
      padding: 0;
      color: ${COLORS.primary};
      ${FONTS.h2}
    `
  };

  return (
    <div
      css={styles.container}
      onClick={() => clickHandler(name, path)}
      role="presentation"
      data-testid="menu-button"
    >
      <Icon {...styles.icon} />
      <p css={styles.label}>{name}</p>
    </div>
  );
};

export default Button;
