import React, { useEffect } from 'react';
import HomeCarousel from 'components/home-carousel';
import NewReleases from 'components/home-new-releases';
import HomeHeader from 'components/home-header';

import Layout from 'layout/PageWithMusicPlayer';
import SearchBar from 'components/search-bar';
import EditorPicks from 'components/home-editor-picks';
import axios from 'axios';
import { USER_DATA_URL } from 'utils/apis/endpoints';
import { setLoginData } from 'store/action-creators';
import { useDispatch } from 'react-redux';
import { User } from 'store/actions';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = window.localStorage.getItem('token');
    const expires = window.localStorage.getItem('expires');

    if (token && expires) {
      axios({
        method: 'GET',
        url: USER_DATA_URL,
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then((res) => {
        const { display_name: name, id, images, uri } = res.data;
        const user: User = { name, id, images, uri };
        dispatch(setLoginData(user, token, expires));
      });
    }
  }, []);

  return (
    <Layout>
      <HomeHeader />
      <SearchBar />
      <HomeCarousel />
      <NewReleases />
      <EditorPicks />
    </Layout>
  );
};

export default HomePage;
