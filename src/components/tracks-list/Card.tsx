/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';
import { Track } from 'store/actions/payloads';

interface Props {
  item: Track;
}

const TrackCard: React.FC<Props> = ({ item }) => {
  const styles = {
    container: css`
      display: flex;
      align-items: center;
      gap: 1rem;
      overflow: hidden;
    `,
    image: css`
      height: 3rem;
      width: 3rem;
      border-radius: 10%;
    `,
    details: css`
      flex: 1;
      overflow: hidden;
    `,
    title: css`
      margin: 0 0 0.2rem 0;
      padding: 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${COLORS.primary};
      ${FONTS.p}
    `,
    artist: css`
      margin: 0;
      padding: 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: ${COLORS.blue};
      ${FONTS.p}
    `
  };

  return (
    <li css={styles.container}>
      <img css={styles.image} src={item.images[2].url} alt="" />
      <div css={styles.details}>
        <p css={styles.title}>{item.name}</p>
        <p css={styles.artist}>{item.artist}</p>
      </div>
    </li>
  );
};

export default TrackCard;
