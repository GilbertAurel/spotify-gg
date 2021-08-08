import React, { useState } from 'react';
import Layout from 'layout/PageWithMusicPlayer';
import HomeCarousel from 'components/home-carousel';
import HomeHeader from 'components/home-header';
import SearchBar from 'components/search-bar';
import NewReleasesWidget from 'components/home-new-releases';
import EditorPicksWidget from 'components/home-editor-picks';
import SideMenu from 'components/side-menu';
import { initialFetch } from 'utils/apis/initialCalls';

const HomePage: React.FC = () => {
  const { loaded } = initialFetch();
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => setToggleMenu(!toggleMenu);

  if (loaded) {
    return (
      <Layout>
        <HomeHeader toggleMenu={toggleMenuHandler} />
        <SearchBar />
        <HomeCarousel />
        <NewReleasesWidget />
        <EditorPicksWidget />
        {toggleMenu && <SideMenu toggleMenu={toggleMenuHandler} />}
      </Layout>
    );
  }

  return <div>test</div>;
};

export default HomePage;
