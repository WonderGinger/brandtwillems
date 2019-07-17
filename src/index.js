import React from 'react'
import ReactDOM from 'react-dom';
import Root from './components/Root';
import { CssBaseline } from '@material-ui/core';
import { Helmet } from 'react-helmet';
import { blueGrey } from '@material-ui/core/colors';

ReactDOM.render(
  <React.Fragment>
    <CssBaseline/>
    <Helmet>
      <style>{`body { background-color: ${blueGrey[900]}; }`}</style>    
    </Helmet>
    <Root/>
  </React.Fragment>,
  document.getElementById('root')
);
