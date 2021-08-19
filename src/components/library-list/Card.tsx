/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Vinyl } from 'assets/images';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setSelectedPlaylists } from 'store/action-creators';
import { Playlists } from 'store/actions/payloads';

interface Props {
  item: Playlists;
}

const PlaylistCard: React.FC<Props> = ({ item }) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const styles = {
    button: css`
      display: flex;
      align-items: center;
      gap: 1rem;
      text-align: unset;
      text-decoration: none;
      background-color: transparent;
      border: none;
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

  const redirectHandler = () => {
    dispatch(setSelectedPlaylists(item));
    history.push({ pathname: `/library/${item.id}` });
  };

  return (
    <li>
      <button
        type="button"
        css={styles.button}
        onClick={redirectHandler}
        data-testid="playlist-button"
      >
        <img
          css={styles.image}
          src={item.image[0] ? item.image[0].url : Vinyl}
          alt=""
        />
        <section css={styles.details}>
          <p css={styles.title}>{item.name}</p>
          <p css={styles.type}>
            {item.type} &#183; {item.owner}
          </p>
        </section>
      </button>
    </li>
  );
};

export default PlaylistCard;
