/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React from 'react';
import Layout from 'layout/PageWithoutMusicPlayer';
import { COLORS, FONTS } from 'assets/theme';
import { useHistory } from 'react-router-dom';

interface Props {
  message: string;
  error?: boolean;
}

const FullLoading: React.FC<Props> = ({ message, error }) => {
  const history = useHistory();

  const errorHandler = () => history.push({ pathname: '/' });

  const styles = {
    container: css`
      justify-self: center;
      align-self: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `,
    label: css`
      color: ${COLORS.darkblue};
      ${FONTS.h2}
    `,
    button: css`
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 1rem;
      color: ${COLORS.primary};
      background-color: ${COLORS.lightblue};
      ${FONTS.p}
    `
  };

  return (
    <Layout>
      <div css={styles.container}>
        <p css={styles.label}>{message}</p>
        {error && (
          <button type="button" css={styles.button} onClick={errorHandler}>
            back to home
          </button>
        )}
      </div>
    </Layout>
  );
};

export default FullLoading;
