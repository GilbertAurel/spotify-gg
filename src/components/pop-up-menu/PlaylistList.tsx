/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { ADD_TO_PLAYLIST_URL } from 'utils/apis/endpoints';

interface Props {
  toggleHandler: () => void;
  uri: string;
}

const PlaylistList: React.FC<Props> = ({ toggleHandler, uri }) => {
  const playlists = useSelector((state: RootState) => state.playlist.playlists);
  const token = useSelector((state: RootState) => state.user.token);

  const addToPlaylist = (playlistId: string) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: {
        uris: uri
      }
    };

    axios
      .post(ADD_TO_PLAYLIST_URL(playlistId), null, config)
      .then(() => toggleHandler());
  };

  const styles = {
    container: css`
      width: 100%;
      display: grid;
      grid-auto-rows: 5rem;
      align-content: flex-end;
    `,
    button: css`
      background-color: ${COLORS.white};
      border: none;
      color: ${COLORS.primary};
      ${FONTS.h2}
    `,
    backButton: css`
      background-color: ${COLORS.white};
      border: none;
      color: ${COLORS.red};
      ${FONTS.h2}
    `
  };

  return (
    <div css={styles.container}>
      {playlists.map((playlist) => (
        <button
          key={playlist.id}
          type="button"
          css={styles.button}
          onClick={() => addToPlaylist(playlist.id)}
        >
          {playlist.name}
        </button>
      ))}
      <button type="button" css={styles.backButton} onClick={toggleHandler}>
        back
      </button>
    </div>
  );
};

export default PlaylistList;
