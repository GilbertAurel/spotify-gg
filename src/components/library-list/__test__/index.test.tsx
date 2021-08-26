import { cleanup, render, screen, fireEvent } from '@testing-library/react';
import * as redux from 'react-redux';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import LibraryList from '../index';

const playlists = [
  {
    name: 'name',
    image: [{ url: 'url' }],
    id: 'playlist-id',
    description: 'description'
  }
];

const history = createMemoryHistory();

beforeEach(() => {
  jest.spyOn(redux, 'useSelector').mockReturnValue(playlists);
  jest.spyOn(redux, 'useDispatch').mockImplementation(() => jest.fn());
});
afterAll(cleanup);

it('should render playlist lists', async () => {
  render(
    <Router history={history}>
      <LibraryList formState />
    </Router>
  );

  expect(await screen.findAllByRole('img')).toHaveLength(1);
});

it('should redirect user to new page with link', async () => {
  render(
    <Router history={history}>
      <LibraryList formState />
    </Router>
  );

  const playlistButton = await screen.findByTestId('playlist-button');
  fireEvent.click(playlistButton);

  expect(history.location.pathname).toBe(`/library/${playlists[0].id}`);
});
