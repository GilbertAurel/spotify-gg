/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';
import { Track } from 'store/actions/payloads';

interface Props {
  item: Track;
}

const SongCard: React.FC<Props> = ({ item }) => {
  const styles = {
    container: css`
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
    `,
    image: css`
      height: 3rem;
      width: 3rem;
      border-radius: 10%;
    `,
    title: css`
      color: ${COLORS.primary};
      ${FONTS.p}
    `
  };

  return (
    <li css={styles.container}>
      <img css={styles.image} src={item.images[2].url} alt="" />
      <p css={styles.title}>{item.name}</p>
    </li>
  );
};

export default SongCard;
