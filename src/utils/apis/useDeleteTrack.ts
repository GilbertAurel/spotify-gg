import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { REMOVE_FROM_PLAYLIST_URL } from 'utils/apis/endpoints';
import axios from 'axios';
import { RootState } from 'store/reducers';
import { closeTrackMenu } from 'store/action-creators';

const useDeleteTracks = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const search = useLocation().search;
  const playlistId = useLocation().pathname.split('/')[2];
  const track = useSelector((state: RootState) => state.playlist.openMenu);
  const token = useSelector((state: RootState) => state.user.token);

  const deleteTrack = async () => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: {
        tracks: [{ uri: track.uri }]
      }
    };

    return (
      !search &&
      axios.delete(REMOVE_FROM_PLAYLIST_URL(playlistId), config).then(() => {
        dispatch(closeTrackMenu());
        history.push({ pathname: `/library` });
      })
    );
  };

  return { deleteTrack };
};

export default useDeleteTracks;
