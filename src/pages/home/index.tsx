/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useState } from 'react';
import Layout from 'layout/PageWithMusicPlayer';
import HomeCarousel from 'components/home-carousel';
import HomeHeader from 'components/home-header';
import SearchBar from 'components/search-bar';
import NewReleasesWidget from 'components/home-new-releases';
import EditorPicksWidget from 'components/home-editor-picks';
import SideMenu from 'components/side-menu';
import useFetchHomeData from 'utils/apis/useFetchHomeData';

const HomePage: React.FC = () => {
  const { loaded } = useFetchHomeData();
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleMenuHandler = () => setToggleMenu(!toggleMenu);

  const styles = {
    container: css`
      display: grid;
      position: relative;
      grid-auto-rows: minmax(5rem, auto);
    `
  };

  if (loaded) {
    return (
      <Layout>
        <div css={styles.container}>
          <HomeHeader toggleMenu={toggleMenuHandler} />
          <SearchBar />
          <HomeCarousel />
          <NewReleasesWidget />
          <EditorPicksWidget />
          {toggleMenu && <SideMenu toggleMenu={toggleMenuHandler} />}
        </div>
      </Layout>
    );
  }

  return <div>loading..</div>;
};

export default HomePage;
