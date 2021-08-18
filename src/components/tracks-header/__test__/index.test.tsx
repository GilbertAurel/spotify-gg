import { render, screen } from '@testing-library/react';
import SongListHeader from '../index';

it('should render song list header with title', () => {
  render(<SongListHeader />);
  expect(screen.getByTestId('title')).toBeInTheDocument();
  expect(screen.getByTestId('image')).toBeInTheDocument();
  expect(screen.getByTestId('type-owner')).toBeInTheDocument();
  expect(screen.getByTestId('description')).toBeInTheDocument();
});
