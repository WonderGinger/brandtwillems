import React from 'react'
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { CssBaseline } from '@material-ui/core';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline/>
    <Root/>
  </React.Fragment>,
  document.getElementById('root')
);
