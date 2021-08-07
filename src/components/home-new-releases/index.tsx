/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import WidgetLayout from 'layout/HomeWidgetWithTitle';
import Card from './Card';

const NewReleases: React.FC = () => {
  const title = 'New Releases';
  return (
    <WidgetLayout title={title}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </WidgetLayout>
  );
};

export default NewReleases;
