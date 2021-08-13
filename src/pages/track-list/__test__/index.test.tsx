import { render, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import * as redux from 'react-redux';
import { SEARCH_URL } from 'utils/apis/endpoints';
import TrackListPage from '../index';

const tracks = {
  items: [
    {
      album: { images: [{ url: 'image url' }] },
      artists: [{ name: 'artist name' }],
      duration_ms: 261013,
      name: 'song name',
      uri: 'uri'
    }
  ]
};

const server = setupServer(
  rest.get(SEARCH_URL, (req, res, ctx) => {
    return res(ctx.json({ tracks }));
  })
);

beforeAll(() => server.listen());
beforeEach(() => {
  jest.spyOn(redux, 'useSelector').mockReturnValue('token');
  jest.spyOn(URLSearchParams.prototype, 'get').mockReturnValue('search params');
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should render track list', async () => {
  render(<TrackListPage />);
  expect(await screen.findAllByRole('listitem')).toHaveLength(1);
});

it('should render item not found', async () => {
  render(<TrackListPage />);

  await waitFor(() =>
    server.use(
      rest.get(SEARCH_URL, (req, res, ctx) => {
        return res(
          ctx.status(503),
          ctx.json({ message: 'Service Unavailable' })
        );
      })
    )
  );

  expect(await screen.findByTestId('loading')).toBeInTheDocument();
});
