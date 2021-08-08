/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Avatar } from 'assets/images';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

const Profile: React.FC = () => {
  const { name, images, email } = useSelector(
    (state: RootState) => state.user.user
  );

  const styles = {
    container: css`
      display: flex;
      gap: 1rem;
      align-items: center;
    `,
    image: css`
      height: 3rem;
      width: 3rem;
      object-fit: cover;
      border-radius: 50%;
    `,
    name: css`
      margin: 0;
      padding: 0;
      max-width: 25ch;
      color: ${COLORS.primary};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      ${FONTS.h2}
    `,
    email: css`
      margin: 0;
      padding: 0;
      max-width: 25ch;
      color: ${COLORS.darkblue};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      ${FONTS.p}
    `
  };

  return (
    <div css={styles.container}>
      <img
        css={styles.image}
        src={images[0]?.url ? images[0].url : Avatar}
        alt="avatar"
      />
      <section>
        <p css={styles.name}>{name}</p>
        <p css={styles.email}>{email}</p>
      </section>
    </div>
  );
};

export default Profile;
