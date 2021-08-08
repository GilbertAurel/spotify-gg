import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { Logout, PlaylistIcon, SettingIcon } from 'assets/icons/components';

export interface ButtonType {
  name: string;
  path: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => EmotionJSX.Element;
}

export const BUTTONS: ButtonType[] = [
  {
    name: 'Playlist',
    Icon: PlaylistIcon,
    path: '/playlists'
  },
  {
    name: 'Settings',
    Icon: SettingIcon,
    path: '/playlists'
  },
  {
    name: 'Sign out',
    Icon: Logout,
    path: '/signout'
  }
];
