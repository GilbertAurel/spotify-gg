/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import TrackList from 'components/tracks-list';
import React from 'react';
import { useSearchTracks } from 'utils/apis/useSearchTracks';
import Layout from 'layout/PageWithMusicPlayer';
import SearchHeader from 'components/search-header';
import FullPageAlert from 'components/full-alert-msg';
import FullLoading from 'components/full-loading';

const TrackListPage: React.FC = () => {
  const { tracks, loaded, error } = useSearchTracks();

  const styles = {
    container: css`
      flex: 1;
      position: relative;
      display: grid;
      gap: 1rem;
      grid-template-rows: 8rem 1fr;
    `,
    noResultContainer: css`
      justify-self: center;
      align-self: center;
    `
  };

  if (error) return <FullLoading message="something went wrong :(" error />;

  if (!loaded)
    return <FullPageAlert message="loading results.." variant="grid" />;

  return (
    <Layout>
      <div css={styles.container}>
        <SearchHeader />
        {tracks.length > 0 ? (
          <TrackList tracks={tracks} />
        ) : (
          <FullPageAlert message="no search result" variant="grid" />
        )}
      </div>
    </Layout>
  );
};

export default TrackListPage;
