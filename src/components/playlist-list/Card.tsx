/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';
import { Link } from 'react-router-dom';
import { Playlists } from 'store/actions/payloads';

interface Props {
  item: Playlists;
}

const PlaylistCard: React.FC<Props> = ({ item }) => {
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
    <Link
      key={item.id}
      css={styles.container}
      to={`/library/${item.id}`}
      role="presentation"
      data-testid="playlist-button"
    >
      <img css={styles.image} src={item.image[0].url} alt="" />
      <h1 css={styles.title}>{item.name}</h1>
    </Link>
  );
};

export default PlaylistCard;
