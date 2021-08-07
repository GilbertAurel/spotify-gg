/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import WidgetLayout from 'layout/HomeWidgetWithTitle';
import AlbumCard from './Card';

const EditorPicks: React.FC = () => {
  const title = 'Editor Picks';
  return (
    <WidgetLayout title={title}>
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
      <AlbumCard />
    </WidgetLayout>
  );
};

export default EditorPicks;
