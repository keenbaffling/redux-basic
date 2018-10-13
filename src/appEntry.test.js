import React from 'react';
import ReactDOM from 'react-dom';
import AppEntry from './appEntry';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppEntry />, div);
  ReactDOM.unmountComponentAtNode(div);
});
