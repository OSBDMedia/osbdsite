import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-96766402-1');

import Routes from './routes';

import './assets/css/fonts.css';
import './index.css';

function fireTracking() {
  if (window.location.hostname !== 'localhost') {
    ReactGA.pageview(window.location.pathname);
  }
}

ReactDOM.render(
  <Router onUpdate={fireTracking} history={browserHistory} routes={Routes} />,
  document.getElementById('root')
);
