/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';

const HomeCarousel: React.FC = () => {
  const styles = {
    container: css`
      grid-row: span 3;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    `,
    image: css`
      width: 80%;
      height: 10rem;
      object-fit: cover;
      border-radius: 0.6rem;
    `
  };

  return (
    <div css={styles.container}>
      <img css={styles.image} src="https://picsum.photos/200" alt="headline" />
    </div>
  );
};

export default HomeCarousel;
