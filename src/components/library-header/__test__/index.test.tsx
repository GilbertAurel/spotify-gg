import { render, screen } from '@testing-library/react';
import LibraryHeader from '../index';

it('should render playlist header with title and add button', () => {
  render(<LibraryHeader toggleHandler={jest.fn()} />);
  expect(screen.getByText(/your library/i)).toBeInTheDocument();
  expect(screen.getByTestId('add-button')).toBeInTheDocument();
});
