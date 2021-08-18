import { render, screen, fireEvent } from '@testing-library/react';
import * as redux from 'react-redux';
import { Router } from 'react-router';
import { createMemoryHistory } from 'history';
import SideMenu from '../index';

const history = createMemoryHistory();
const mockToggleMenu = jest.fn();
const mockFirstMenu = '/library';
const mockUser = {
  name: 'name',
  email: 'email',
  images: [{ url: 'url' }]
};

beforeEach(() => jest.spyOn(redux, 'useSelector').mockReturnValue(mockUser));

it('should render close button shader, user profile, and 2 menus', () => {
  render(<SideMenu toggleMenu={mockToggleMenu} />);

  expect(screen.getByTestId('close-menu-button')).toBeInTheDocument();
  expect(screen.getByTestId('user-image')).toBeInTheDocument();
  expect(screen.getByTestId('user-name')).toBeInTheDocument();
  expect(screen.getByTestId('user-email')).toBeInTheDocument();
  expect(screen.getAllByTestId('menu-button')).toHaveLength(2);
});

it('close menu button should close toggle off the menu', () => {
  render(<SideMenu toggleMenu={mockToggleMenu} />);
  const closeShaderButton = screen.getByTestId('close-menu-button');
  fireEvent.click(closeShaderButton);

  expect(mockToggleMenu).toBeCalledTimes(1);
});

it('menu button should redirect user', () => {
  render(
    <Router history={history}>
      <SideMenu toggleMenu={mockToggleMenu} />
    </Router>
  );

  const firstButton = screen.getAllByTestId('menu-button')[0];
  fireEvent.click(firstButton);

  expect(history.location.pathname).toBe(mockFirstMenu);
});
