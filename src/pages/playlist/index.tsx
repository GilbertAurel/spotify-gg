import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';

const PlaylistPage: React.FC = () => {
  const playlists = useSelector((state: RootState) => state.playlist.playlists);

  return (
    <div>
      {playlists.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};

export default PlaylistPage;
