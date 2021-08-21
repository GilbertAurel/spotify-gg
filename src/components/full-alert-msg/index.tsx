/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { COLORS, FONTS } from 'assets/theme';
import React from 'react';

interface Props {
  message: string;
  variant: 'grid' | 'flex';
}

const FullPageAlert: React.FC<Props> = ({ message, variant }) => {
  const styles = {
    grid: css`
      justify-self: center;
      align-self: center;
    `,
    flex: css`
      flex: 1;
      justify-self: center;
      align-self: center;
    `,
    label: css`
      color: ${COLORS.darkblue};
      ${FONTS.h2}
    `
  };

  return (
    <div css={styles[variant]}>
      <p css={styles.label}>{message}</p>
    </div>
  );
};

export default FullPageAlert;
