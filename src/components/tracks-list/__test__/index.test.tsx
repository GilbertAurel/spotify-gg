import { screen, render } from '@testing-library/react';
import { Track } from 'store/actions/payloads';
import * as redux from 'react-redux';
import TrackList from '../index';

const mockTracks: Track[] = [
  {
    name: 'name',
    artist: 'artist',
    images: [{}, {}, { url: 'url' }],
    uri: 'uri',
    duration: '1234'
  }
];

it('list should render one song card', () => {
  jest.spyOn(redux, 'useDispatch').mockImplementation(() => jest.fn());
  render(<TrackList tracks={mockTracks} />);
  expect(screen.queryAllByRole('img')).toHaveLength(1);
});
