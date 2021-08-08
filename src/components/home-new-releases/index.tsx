/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import WidgetLayout from 'layout/HomeWidgetWithTitle';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { Track } from 'store/actions';
import Card from './Card';

const title = 'New Releases';

const NewReleases: React.FC = () => {
  const tracks = useSelector((state: RootState) => state.playlist.newReleases);

  return (
    <WidgetLayout title={title}>
      {tracks.map((track: Track) => (
        <Card key={track.uri} track={track} />
      ))}
    </WidgetLayout>
  );
};

export default NewReleases;
