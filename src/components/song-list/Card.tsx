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
    <div css={styles.container}>
      <img src={item.images[2].url} alt="" />
      <p>{item.name}</p>
    </div>
  );
};

export default SongCard;
