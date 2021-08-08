import React, { useEffect } from 'react';
import HomeCarousel from 'components/home-carousel';
import NewReleases from 'components/home-new-releases';
import HomeHeader from 'components/home-header';

import Layout from 'layout/PageWithMusicPlayer';
import SearchBar from 'components/search-bar';
import EditorPicks from 'components/home-editor-picks';
import axios from 'axios';
import {
  EDITOR_PICKS_URL,
  NEW_RELEASES_URL,
  USER_DATA_URL
} from 'utils/apis/endpoints';
import {
  setEditorPicks,
  setLoginData,
  setNewReleases
} from 'store/action-creators';
import { useDispatch } from 'react-redux';

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
        const user = { name, id, images, uri };
        dispatch(setLoginData(user, token, expires));
      });

      axios({
        method: 'GET',
        url: NEW_RELEASES_URL,
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          limit: 10
        }
      }).then((res) => {
        const newRelases = res.data.albums.items.map((item: any) => ({
          artist: item.artists[0].name,
          images: item.images,
          name: item.name,
          uri: item.uri
        }));

        dispatch(setNewReleases(newRelases));
      });

      axios({
        method: 'GET',
        url: EDITOR_PICKS_URL,
        headers: {
          Authorization: `Bearer ${token}`
        },
        params: {
          limit: 10
        }
      }).then((res) => {
        const albums = res.data.playlists.items.map((item: any) => ({
          name: item.name,
          images: item.images,
          trackUrl: item.tracks.href
        }));

        dispatch(setEditorPicks(albums));
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
