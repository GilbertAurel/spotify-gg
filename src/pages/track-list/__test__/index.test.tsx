import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import TrackList from '../index';
import * as redux from 'react-redux';
import { SEARCH_URL } from 'utils/apis/endpoints';

const tracks = {
  items: [
    {
      album: {
        images: []
      },
      artists: [
        {
          name: 'YOASOBI'
        }
      ],
      duration_ms: 261013,
      name: '夜に駆ける',
      uri: 'spotify:track:3dPtXHP0oXQ4HCWHsOA9js'
    }
  ]
};

const mockUseSelector = jest.spyOn(redux, 'useSelector');
const mockURLParams = jest.spyOn(URLSearchParams.prototype, 'get');

const server = setupServer(
  rest.get(SEARCH_URL, (req, res, ctx) => {
    return res(ctx.json({ tracks }));
  })
);

beforeAll(() => server.listen());
beforeEach(() => {
  mockURLParams.mockReturnValue('song title');
  mockUseSelector.mockReturnValue('user token');
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('should render track list', async () => {
  render(<TrackList />);
  expect(await screen.findAllByRole('listitem')).toHaveLength(1);
});

test('should render item not found', async () => {
  render(<TrackList />);
  await waitFor(() =>
    server.use(
      rest.get(SEARCH_URL, (req, res, ctx) => {
        return res(
          ctx.status(501),
          ctx.json({ message: 'internal server error' })
        );
      })
    )
  );

  expect(await screen.findByTestId('loading')).toBeInTheDocument();
});
