import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import EditorPicks from '../index';

const history = createMemoryHistory();

const playlists = [
  {
    name: 'name',
    images: [
      {
        url: 'url'
      }
    ],
    trackUrl: 'url'
  }
];

it('should render editor picks widget', async () => {
  jest.spyOn(redux, 'useSelector').mockReturnValue(playlists);
  jest.spyOn(redux, 'useDispatch').mockImplementation(() => jest.fn());
  render(
    <Router history={history}>
      <EditorPicks />
    </Router>
  );

  expect(await screen.findAllByRole('img')).toHaveLength(1);
});
