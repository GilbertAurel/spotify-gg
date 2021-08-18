import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import routerData, { Router } from 'react-router';
import Navbar from '../index';

const history = createMemoryHistory();
const mockHistoryPush = jest
  .spyOn(history, 'push')
  .mockImplementation(() => jest.fn());
const mockLocation = { pathname: '/path', hash: '', search: '', state: '' };

beforeEach(() =>
  jest.spyOn(routerData, 'useLocation').mockReturnValue(mockLocation)
);
afterAll(cleanup);

it('should render navbar with 4 menus', () => {
  render(<Navbar />);

  expect(screen.getByTestId('home-button')).toBeInTheDocument();
  expect(screen.getByTestId('search-button')).toBeInTheDocument();
  expect(screen.getByTestId('library-button')).toBeInTheDocument();
  expect(screen.getByTestId('account-button')).toBeInTheDocument();
});

it('button click should redirects user to another page', () => {
  render(
    <Router history={history}>
      <Navbar />
    </Router>
  );

  fireEvent.click(screen.getByTestId('home-button'));
  fireEvent.click(screen.getByTestId('search-button'));
  fireEvent.click(screen.getByTestId('library-button'));
  fireEvent.click(screen.getByTestId('account-button'));

  expect(mockHistoryPush).toBeCalledTimes(4);
});
