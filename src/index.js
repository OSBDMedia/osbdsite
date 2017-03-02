import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';

import Routes from './routes';

import './assets/css/fonts.css';
import './index.css';

ReactDOM.render(
  <Router history={hashHistory} routes={Routes} />,
  document.getElementById('root')
);
