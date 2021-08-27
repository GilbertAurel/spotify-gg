/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Logo } from 'assets/images';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';

const LoginHeadline: React.FC = () => {
  const styles = {
    container: css`
      grid-row: 6/10;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `,
    logo: css`
      height: 5rem;
      width: 5rem;
      object-fit: cover;
    `,
    headline: css`
      margin: 0;
      padding: 0;
      max-width: 15ch;
      color: ${COLORS.primary};
      ${FONTS.title}
    `,
    details: css`
      margin: 0;
      padding: 0;
      max-width: 80%;
      color: ${COLORS.darkblue};
      ${FONTS.p}
    `
  };
  return (
    <div css={styles.container}>
      <img css={styles.logo} src={Logo} alt="" />
      <h1 css={styles.headline}>The ultimate Spotify playlists organizer.</h1>
      <p css={styles.details}>
        Sagittis, amet elementum integer elementum tempus ut blandit quis fames
        velit enim lectus ornare nibh duis erat vitae massa justo pulvinar erat
        turpis.
      </p>
    </div>
  );
};

export default LoginHeadline;
