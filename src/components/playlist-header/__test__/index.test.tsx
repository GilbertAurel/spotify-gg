import { render, screen } from '@testing-library/react';
import PlaylistHeader from '../index';

it('should render playlist header with title', () => {
  render(<PlaylistHeader />);
  expect(screen.getByText(/saved playlists/i)).toBeInTheDocument();
});
