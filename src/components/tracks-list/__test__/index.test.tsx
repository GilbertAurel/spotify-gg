import { screen, render } from '@testing-library/react';
import { Track } from 'store/actions/payloads';
import SongList from '../index';

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
  render(<SongList tracks={mockTracks} />);
  expect(screen.queryAllByRole('img')).toHaveLength(1);
});
