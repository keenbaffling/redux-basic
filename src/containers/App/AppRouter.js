import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <span>Loading...</span>;

const routes = [
  {
    path: '',
    component: Loadable({
      loader: () => import('../Posts'),
      loading: Loading
    })
  },
  {
    path: 'posts/:id',
    component: Loadable({
      loader: () => import('../Posts/PostItem'),
      loading: Loading
    })
  }
];

class AppRouter extends Component {
  render() {
    return (
      <main className="app-main">
        <Switch>
          {routes.map(singleRoute => {
            const { path, exact, ...otherProps } = singleRoute;
            return (
              <Route
                exact={exact === false ? false : true}
                key={singleRoute.path}
                path={`/${singleRoute.path}`}
                {...otherProps}
              />
            );
          })}
        </Switch>
      </main>
    );
  }
}

export default AppRouter;
