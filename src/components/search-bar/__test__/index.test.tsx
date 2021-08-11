import { cleanup, render, fireEvent, waitFor } from '@testing-library/react';
import SearchBar from '../index';

let getByTestId: any;

beforeEach(() => {
  const component = render(<SearchBar />);
  getByTestId = component.getByTestId;
});

afterEach(cleanup);

describe('search input form', () => {
  it('input value start with blank', () => {
    expect(getByTestId('input-form')).toHaveValue('');
  });

  it('change input value', async () => {
    const formInput = getByTestId('input-form');

    await waitFor(() => {
      fireEvent.change(formInput, {
        target: { value: 'search value' }
      });
    });

    expect(formInput.value).toBe('search value');
  });
});

describe('submit button', () => {
  it('button pressed should be working properly', () => {
    fireEvent.click(getByTestId('submit-button'));
  });
});
