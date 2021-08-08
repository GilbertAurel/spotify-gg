import { css } from '@emotion/react';

export const COLORS = {
  primary: '#0F3E51',
  secondary: '#245F71',
  darkblue: '#5BA3B3',
  blue: '#A2D8DE',
  lightblue: '#E1F5F6',
  lightgray: '#FAFAFA',
  white: '#FFFFFF',

  frostedWhite: 'rgba(191, 191, 191, 0.6)',
  placeholder: '#5BA3B3'
};

export const FONTS = {
  title: css`
    font-size: 2rem;
    font-weight: 700;
    font-family: 'Noto Sans', sans-serif;
  `,
  h1: css`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: 'Noto Sans', sans-serif;
  `,
  h2: css`
    font-size: 1rem;
    font-family: 'Noto Sans', sans-serif;
  `,
  p: css`
    font-size: 0.75rem;
    font-family: 'Noto Sans', sans-serif;
  `
};

export const SIZES = {
  icon: '24px'
};
