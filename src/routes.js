// src/routes.js
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Team from './components/Team';
import Projects from './components/Projects';

export default (
  <Route path='/' component={App}>
    <IndexRoute name="home" component={Home} />
    <Route name="about" path="/about" component={About} />
    <Route name="team" path="/team" component={Team} />
    <Route name="projects" path="/projects" component={Projects} />
  </Route>
);
