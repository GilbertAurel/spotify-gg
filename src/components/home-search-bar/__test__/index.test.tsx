import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import SearchBar from '../index';

const searchMock = 'title';
const history = createMemoryHistory();

it('should render search bar with empty text input and button', () => {
  render(<SearchBar />);
  expect(screen.getByTestId('input-form')).toHaveValue('');
  expect(screen.getByTestId('submit-button')).toBeInTheDocument();
});

it('input form value should change', () => {
  render(<SearchBar />);

  const inputForm = screen.getByTestId('input-form');
  const changeValue = fireEvent.change(inputForm, {
    target: { value: searchMock }
  });

  expect(changeValue).toBeTruthy();
});

it('button click should redirect to other page', () => {
  render(
    <Router history={history}>
      <SearchBar />
    </Router>
  );

  const inputForm = screen.getByTestId('input-form');
  fireEvent.change(inputForm, { target: { value: searchMock } });

  const button = screen.getByTestId('submit-button');
  fireEvent.click(button);

  expect(history.location.search).toBe(`?title=${searchMock}`);
  expect(history.location.pathname).toBe('/search');
});
