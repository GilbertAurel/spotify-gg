import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import { LogoutIcon, SettingIcon } from 'assets/icons/components';

export interface ButtonType {
  name: string;
  path: string;
  Icon: (props: React.SVGProps<SVGSVGElement>) => EmotionJSX.Element;
}

export const BUTTONS: ButtonType[] = [
  {
    name: 'Settings',
    Icon: SettingIcon,
    path: '/library'
  },
  {
    name: 'Sign out',
    Icon: LogoutIcon,
    path: '/signout'
  }
];
