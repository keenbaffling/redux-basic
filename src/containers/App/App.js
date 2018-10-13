import React, { Component } from 'react';
import './app.scss';
import AppRouter from './AppRouter';

class App extends Component {
  render() {
    const { url } = this.props.match;

    return (
      <div className="app">
        <AppRouter url={url} />
      </div>
    );
  }
}

export default App;
