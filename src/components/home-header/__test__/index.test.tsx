import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../index';
import * as redux from 'react-redux';

const user = {
  images: [
    {
      url: 'url'
    }
  ]
};

const mockToggleFunction = jest.fn();

it('should render header widget', () => {
  jest.spyOn(redux, 'useSelector').mockReturnValue(user);
  render(<Header toggleMenu={mockToggleFunction} />);

  const avatarButton = screen.getByTestId('avatar-button');
  fireEvent.click(avatarButton);

  expect(mockToggleFunction).toBeCalledTimes(1);
});
