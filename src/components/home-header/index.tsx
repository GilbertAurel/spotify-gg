/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Avatar } from 'assets/images';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

interface Props {
  toggleMenu: () => void;
}

const HomeHeader: React.FC<Props> = ({ toggleMenu }) => {
  const { images } = useSelector((state: RootState) => state.user.user);

  const styles = {
    container: css`
      padding: 0 10%;
      grid-row: span 2;
      display: flex;
      align-items: center;
      justify-content: space-between;
    `,
    headline: css`
      max-width: 20ch;
      color: ${COLORS.primary};
      ${FONTS.h1}
    `,
    photo: css`
      height: 3.75rem;
      width: 3.75rem;
      border-radius: 50%;
      background-color: lightgray;
    `
  };

  return (
    <div css={styles.container}>
      <h1 css={styles.headline}>Free Music Everyday Just For You!</h1>
      <img
        src={images[0]?.url ? images[0].url : Avatar}
        alt="picsum placeholder"
        css={styles.photo}
        onClick={toggleMenu}
        role="presentation"
        data-testid="avatar-button"
      />
    </div>
  );
};

export default HomeHeader;
