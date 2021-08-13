import { render, screen } from '@testing-library/react';
import * as redux from 'react-redux';
import EditorPicks from '../index';

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
  render(<EditorPicks />);

  expect(await screen.findAllByRole('img')).toHaveLength(1);
});
