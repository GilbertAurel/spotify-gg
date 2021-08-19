import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import TracksHeader from '../index';

const playlists = {
  name: 'name',
  image: [{ url: 'url' }],
  id: 'playlist-id',
  description: 'description'
};

it('should render song list header with title', () => {
  jest.spyOn(redux, 'useSelector').mockReturnValue(playlists);
  render(<TracksHeader />);
  expect(screen.getByTestId('title')).toBeInTheDocument();
  expect(screen.getByTestId('image')).toBeInTheDocument();
  expect(screen.getByTestId('type-owner')).toBeInTheDocument();
  expect(screen.getByTestId('description')).toBeInTheDocument();
});
