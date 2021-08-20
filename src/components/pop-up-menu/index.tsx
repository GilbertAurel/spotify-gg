/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeTrackMenu, setSelectedTrack } from 'store/action-creators';
import { RootState } from 'store/reducers';
import { AddIcon, LogoutIcon, PlayIcon } from 'assets/icons/components';
import MenuButton from './Button';
import MenuDetails from './Details';
import PlaylistList from './PlaylistList';

const PopUpMenu: React.FC = () => {
  const dispatch = useDispatch();
  const track = useSelector((state: RootState) => state.playlist.openMenu);
  const [togglePlaylists, setTogglePlaylists] = useState(false);

  const closeMenuHandler = () => dispatch(closeTrackMenu());

  const playSongHandler = () => {
    dispatch(setSelectedTrack(track));
    dispatch(closeTrackMenu());
  };

  const togglePlaylistHandler = () => setTogglePlaylists(!togglePlaylists);

  const styles = {
    container: css`
      height: 100%;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      flex-direction: column;
      background: linear-gradient(transparent -80%, rgba(255, 255, 255, 1) 50%);
      z-index: 30;
    `,
    closeButton: css`
      flex: 1;
      background-color: transparent;
      border: none;
      color: transparent;
    `,
    innerContainer: css`
      height: 60%;
      width: 100%;
      display: grid;
      grid-auto-rows: 5rem;
    `
  };

  return (
    <div css={styles.container}>
      <button type="button" css={styles.closeButton} onClick={closeMenuHandler}>
        close menu
      </button>
      {!togglePlaylists ? (
        <div css={styles.innerContainer}>
          <MenuDetails track={track} />
          <MenuButton
            label="Play"
            Icon={PlayIcon}
            clickHandler={playSongHandler}
          />
          <MenuButton
            label="Add to playlist"
            Icon={AddIcon}
            clickHandler={togglePlaylistHandler}
          />
          <MenuButton label="Share" Icon={LogoutIcon} />
        </div>
      ) : (
        <PlaylistList toggleHandler={togglePlaylistHandler} uri={track.uri} />
      )}
    </div>
  );
};

export default PopUpMenu;
