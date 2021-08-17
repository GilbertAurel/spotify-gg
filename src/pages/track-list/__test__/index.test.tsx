import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import * as redux from 'react-redux';
import { SEARCH_URL } from 'utils/apis/endpoints';
import TrackListPage from '../index';
import { server } from 'utils/test/serverHandlers';

beforeAll(() => server.listen());
beforeEach(() => {
  jest.spyOn(redux, 'useSelector').mockReturnValue('token');
  jest.spyOn(URLSearchParams.prototype, 'get').mockReturnValue('search params');
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it('should render loading item and error alert item not found', async () => {
  render(<TrackListPage />);

  await waitFor(() =>
    server.use(
      rest.get(SEARCH_URL, (req, res, ctx) => {
        return res(ctx.status(204), ctx.json({ message: 'empty data' }));
      })
    )
  );

  expect(await screen.findByTestId('error-alert')).toBeInTheDocument();
});
