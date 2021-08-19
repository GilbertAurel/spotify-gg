/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import { EditorPicks } from 'store/actions/payloads';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedPlaylists } from 'store/action-creators';

interface Props {
  album: EditorPicks;
}

const AlbumCard: React.FC<Props> = ({ album }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { images, trackUrl } = album;
  const playlistId = trackUrl.split('/')[5];

  const redirectHandler = () => {
    dispatch(
      setSelectedPlaylists({
        name: album.name,
        id: playlistId,
        image: album.images,
        owner: 'Spotify',
        type: 'Editor Picks',
        description: 'Auto generated playlist for you by Spotify'
      })
    );
    history.push({ pathname: `/library/${playlistId}` });
  };

  const styles = {
    image: css`
      max-height: 9.4rem;
      max-width: 9.4rem;
      border-radius: 3px;
      object-fit: cover;
    `,
    button: css`
      background-color: transparent;
      border: none;
    `
  };

  return (
    <button type="button" css={styles.button} onClick={redirectHandler}>
      <img css={styles.image} src={images[0].url} alt="album" />
    </button>
  );
};

export default AlbumCard;
