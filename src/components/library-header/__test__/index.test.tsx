import { render, screen } from '@testing-library/react';
import PlaylistHeader from '../index';

it('should render playlist header with title and add button', () => {
  render(<PlaylistHeader />);
  expect(screen.getByText(/your library/i)).toBeInTheDocument();
  expect(screen.getByTestId('add-button')).toBeInTheDocument();
});
