/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import WidgetLayout from 'layout/HomeWidgetWithTitle';
import { useSelector } from 'react-redux';
import { RootState } from 'store/reducers';
import { EditorPicks } from 'store/actions/payloads';
import AlbumCard from './Card';

const title = "Editor's Picks";

const EditorPicksWidget: React.FC = () => {
  const items = useSelector((state: RootState) => state.playlist.editorPicks);

  return (
    <WidgetLayout title={title}>
      {items.map((item: EditorPicks) => (
        <AlbumCard key={item.name} album={item} />
      ))}
    </WidgetLayout>
  );
};

export default EditorPicksWidget;
