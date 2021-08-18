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
      height: 3.5rem;
      width: 3.5rem;
      border-radius: 10%;
    `,
    details: css`
      display: flex;
      flex-direction: column;
      gap: 0.2rem;
    `,
    title: css`
      margin: 0;
      padding: 0;
      color: ${COLORS.primary};
      ${FONTS.h2}
    `,
    type: css`
      margin: 0;
      padding: 0;
      color: ${COLORS.darkblue};
      text-transform: capitalize;
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
      <section css={styles.details}>
        <p css={styles.title}>{item.name}</p>
        <p css={styles.type}>
          {item.type} &#183; {item.owner}
        </p>
      </section>
    </Link>
  );
};

export default PlaylistCard;
