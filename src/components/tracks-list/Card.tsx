/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setSelectedTrack } from 'store/action-creators';
import { Track } from 'store/actions/payloads';

interface Props {
  item: Track;
}

const TrackCard: React.FC<Props> = ({ item }) => {
  const dispatch = useDispatch();

  const selectTrackHandler = () => {
    dispatch(setSelectedTrack(item));
  };

  const styles = {
    container: css`
      overflow: hidden;
    `,
    button: css`
      width: 100%;
      display: flex;
      align-items: center;
      gap: 1rem;
      background-color: transparent;
      border: none;
      text-align: unset;
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
      <button type="button" css={styles.button} onClick={selectTrackHandler}>
        <img css={styles.image} src={item.images[2].url} alt="" />
        <div css={styles.details}>
          <p css={styles.title}>{item.name}</p>
          <p css={styles.artist}>{item.artist}</p>
        </div>
      </button>
    </li>
  );
};

export default TrackCard;
