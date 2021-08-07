import React from 'react';
import HomeCarousel from 'components/home-carousel';
import NewReleases from 'components/home-new-releases';
import HomeHeader from 'components/home-header';

import Layout from 'layout/PageWithMusicPlayer';
import SearchBar from 'components/search-bar';
import EditorPicks from 'components/home-editor-picks';

const HomePage: React.FC = () => (
  <Layout>
    <HomeHeader />
    <SearchBar />
    <HomeCarousel />
    <NewReleases />
    <EditorPicks />
  </Layout>
);

export default HomePage;
