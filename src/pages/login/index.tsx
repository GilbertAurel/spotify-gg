import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { login } from 'store/action-creators';
import { hashSeparator } from 'utils/hashSeparator';
import { LOGIN_URL } from 'utils/spotifyEndpoints';

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token: token, expires_in: expires } = hashSeparator();
      window.localStorage.setItem('token', token);
      dispatch(login('test', token, expires));
      history.push('/home');
    }
  }, []);

  const loginHandler = () => {
    window.location.href = LOGIN_URL;
  };

  return (
    <div>
      <button type="button" onClick={loginHandler}>
        login
      </button>
    </div>
  );
};

export default Home;
