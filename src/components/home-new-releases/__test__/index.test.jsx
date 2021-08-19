import { render, screen } from '@testing-library/react';
import NewReleases from '../index';
import * as redux from 'react-redux';

const tracks = [
  {
    name: 'name',
    images: [{}, {}, { url: 'url' }],
    artist: 'artist',
    uri: 'uri',
    duration: 'duration'
  }
];

it('should render new releases widget', async () => {
  jest.spyOn(redux, 'useSelector').mockReturnValue(tracks);
  jest.spyOn(redux, 'useDispatch').mockImplementation(() => jest.fn());
  render(<NewReleases />);

  expect(await screen.findAllByRole('img')).toHaveLength(1);
});
