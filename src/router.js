import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';
import { connect } from 'react-redux';
// import Loadable from 'react-loadable';
import App from './containers/App';

// const Loading = () => <span>Loading...</span>;

const PublicRoutes = ({ history }) => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={App} />
        <Route render={() => <h1>404 Not Found!</h1>} />
      </Switch>
    </Router>
  );
};

export default connect(null, null)(PublicRoutes);
