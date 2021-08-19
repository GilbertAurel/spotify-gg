import { render, screen } from '@testing-library/react';
import SearchHeader from '../index';

it('should render search page header with search bar', () => {
  render(<SearchHeader />);

  expect(screen.getByTestId('header-label')).toBeInTheDocument();
});
