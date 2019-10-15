import React from 'react';
import { Router } from 'react-router-dom';
import { History } from 'history';
import routes from './routes';
import Layout from './containers/Layout/Layout';

type AppProps = {
  history: History;
};

const App = ({ history }: AppProps) => {
  return (
    <Router history={history}>
      <Layout>{routes}</Layout>
    </Router>
  );
};

export default App;
