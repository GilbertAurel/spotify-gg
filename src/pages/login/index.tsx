import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { hashSeparator } from 'utils/helpers/hashSeparator';
import { LOGIN_URL } from 'utils/apis/endpoints';

const Home: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    if (window.location.hash) {
      const { access_token: token, expires_in: expires } = hashSeparator();
      window.localStorage.setItem('token', token);
      window.localStorage.setItem('expires', expires);
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
