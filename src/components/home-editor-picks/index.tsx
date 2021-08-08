/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import WidgetLayout from 'layout/HomeWidgetWithTitle';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import AlbumCard from './Card';

const title = "Editor's Picks";

const EditorPicks: React.FC = () => {
  const { editorPicks } = useSelector((state: RootState) => state.playlist);
  const items = [...editorPicks];

  return (
    <WidgetLayout title={title}>
      {items.map((item) => (
        <AlbumCard album={item} />
      ))}
    </WidgetLayout>
  );
};

export default EditorPicks;
