import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import PageRouter from 'router';

const App: React.FC = () => (
  <Provider store={store}>
    <PageRouter />
  </Provider>
);

export default App;
