import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'store/reducers';

const PlaylistPage: React.FC = () => {
  const playlists = useSelector((state: RootState) => state.playlist.playlists);

  return (
    <div>
      {playlists.map((item) => (
        <Link key={item.id} to={`/playlist/${item.id}`} role="presentation">
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default PlaylistPage;
