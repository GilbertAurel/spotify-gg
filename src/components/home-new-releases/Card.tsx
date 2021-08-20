/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import { Track } from 'store/actions/payloads';
import { useDispatch } from 'react-redux';
import { setSelectedTrack } from 'store/action-creators';

interface Props {
  track: Track;
}

const SongCard: React.FC<Props> = ({ track }) => {
  const dispatch = useDispatch();
  const { artist, name, images } = track;

  const selectTrackHandler = () => {
    dispatch(setSelectedTrack(track));
  };

  const styles = {
    container: css`
      min-width: 7rem;
      height: 10rem;
      padding: 0.625rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: unset;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      background-color: ${COLORS.white};
      border: 1px solid ${COLORS.lightgray};
      filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.1));
      border-radius: 0.4rem;
    `,
    image: css`
      width: 100%;
      height: 6rem;
      align-self: center;
      border-radius: 3px;
      object-fit: cover;
    `,
    title: css`
      width: 100%;
      margin: 0;
      padding: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: ${COLORS.primary};
      ${FONTS.p}
    `,
    artist: css`
      width: 100%;
      margin: 0;
      padding: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      color: ${COLORS.darkblue};
      ${FONTS.p}
    `
  };

  return (
    <button type="button" css={styles.container} onClick={selectTrackHandler}>
      <img css={styles.image} src={images[2].url} alt="" />
      <section>
        <p css={styles.title}>{name}</p>
        <p css={styles.artist}>{artist}</p>
      </section>
    </button>
  );
};

export default SongCard;
