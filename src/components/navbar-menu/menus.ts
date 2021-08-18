import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import {
  AccountIcon,
  HomeIcon,
  PlaylistIcon,
  SearchIcon
} from 'assets/icons/components';

export interface MenuType {
  name: string;
  tag: string;
  path: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => EmotionJSX.Element;
}

export const MENUS: MenuType[] = [
  {
    name: 'Home',
    tag: 'home-button',
    Icon: HomeIcon,
    path: '/home'
  },
  {
    name: 'Search',
    tag: 'search-button',
    Icon: SearchIcon,
    path: '/search'
  },
  {
    name: 'Library',
    tag: 'library-button',
    Icon: PlaylistIcon,
    path: '/library'
  },
  {
    name: 'Account',
    tag: 'account-button',
    Icon: AccountIcon,
    path: '/account'
  }
];
