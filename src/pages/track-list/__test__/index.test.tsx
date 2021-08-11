import { cleanup, render } from '@testing-library/react';
import SearchPage from '../index';
import * as redux from 'react-redux';
import * as searchFunction from 'utils/apis/useSearchTracks';

let getByTestId: any;
const reduxSpy = jest.spyOn(redux, 'useSelector');
const tracks = jest.spyOn(searchFunction, 'useSearchTracks');

beforeAll(() => {
  const component = render(<SearchPage />);
  getByTestId = component.getByTestId;
});

afterEach(cleanup);

describe('renders track list page', () => {
  reduxSpy.mockReturnValue({ token: 'mock token' });

  tracks.mockReturnValue({
    loaded: true,
    tracks: [
      {
        name: 'test',
        artist: 'test',
        images: [],
        uri: 'test',
        duration: 'test'
      }
    ]
  });
  

  it('it should render loading first', () => {
    expect(getByTestId('loading').textContent).toBe('loading..');
  });

  it('show search result should render properly', () => {
    const container = getByTestId('item-wrapper');
    expect(container).toBeInTheDocument();
  });
});
