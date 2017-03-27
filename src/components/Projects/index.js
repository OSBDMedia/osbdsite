import React, { Component } from 'react';
import PageTitle from '../PageTitle';
import Project from '../Project';
import FontAwesome  from 'react-fontawesome';
//import renderHTML from 'react-render-html';

import data from './projects.json';
import "./projects.css";

class Team extends Component {

  render() {
    let projects;
    projects = data.projects.map(function(item, i) {
      return <Project data={item} key={i} />;
    });

    return (
      <div>
        <PageTitle title={data.title} />
        <main>
          <p className="youtube-channel"><a href={ data.youTubeChannel } className="youtube-channel-link">

            <FontAwesome name="arrow-right" /> &nbsp; { data.youTubeText }
          </a></p>
          {projects}
        </main>
      </div>
    );
  }

}

export default Team;