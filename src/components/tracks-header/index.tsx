/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

const TracksHeader: React.FC = () => {
  const playlist = useSelector(
    (state: RootState) => state.playlist.selectedPlaylist
  );
  const description =
    playlist?.description.length < 50
      ? playlist?.description
      : `${playlist?.description.split('').splice(0, 50).join('')}..`;

  const styles = {
    container: css`
      padding: 0 10%;
      position: sticky;
      top: 0;
      display: flex;
      align-items: center;
      gap: 1rem;
      box-shadow: 0px 2px 1px 1px rgba(0, 0, 255, 0.05);
      background-color: ${COLORS.white};
    `,
    image: css`
      height: 8rem;
      width: 8rem;
      object-fit: cover;
      border-radius: 0.5rem;
    `,
    title: css`
      margin: 0 0 0.2rem 0;
      padding: 0;
      color: ${COLORS.primary};
      ${FONTS.h2}
    `,
    typeOwner: css`
      margin: 0 0 0.8rem 0;
      padding: 0;
      text-transform: capitalize;
      color: ${COLORS.darkblue};
      ${FONTS.p}
    `,
    description: css`
      max-width: 25ch;
      margin: 0;
      padding: 0;
      color: ${COLORS.primary};
      opacity: 0.5;
      ${FONTS.p}
    `
  };

  return (
    <div css={styles.container}>
      <img
        css={styles.image}
        src={playlist?.image[0].url}
        alt=""
        data-testid="image"
      />
      <section>
        <h1 css={styles.title} data-testid="title">
          {playlist?.name}
        </h1>
        <p css={styles.typeOwner} data-testid="type-owner">
          {playlist?.type} &#183; {playlist?.owner}
        </p>
        <p css={styles.description} data-testid="description">
          {description}
        </p>
      </section>
    </div>
  );
};

export default TracksHeader;
