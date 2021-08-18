import { render, screen } from '@testing-library/react';
import SongListHeader from '../index';

it('should render song list header with title', () => {
  render(<SongListHeader />);
  expect(screen.getByText(/track list/i)).toBeInTheDocument();
});
