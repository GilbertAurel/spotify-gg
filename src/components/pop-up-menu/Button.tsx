/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS, SIZES } from 'assets/theme';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React from 'react';

interface Props {
  label: string;
  clickHandler?: () => void;
  Icon: (props: React.SVGProps<SVGSVGElement>) => EmotionJSX.Element;
}

const MenuButton: React.FC<Props> = ({ label, Icon, clickHandler }) => {
  const styles = {
    container: css`
      width: 100%;
      padding: 0 10%;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
      text-align: left;
      background-color: transparent;
      border: none;
      color: ${COLORS.primary};
      ${FONTS.h2}
    `,
    icon: {
      height: SIZES.icon,
      width: SIZES.icon,
      fill: COLORS.blue
    }
  };

  return (
    <button type="button" css={styles.container} onClick={clickHandler}>
      <Icon {...styles.icon} />
      <p>{label}</p>
    </button>
  );
};

export default MenuButton;
