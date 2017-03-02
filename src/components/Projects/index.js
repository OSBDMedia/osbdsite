import React, { Component } from 'react';
import PageTitle from '../PageTitle';
import Project from '../Project';
//import renderHTML from 'react-render-html';

import data from './projects.json';

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
          {projects}
        </main>
      </div>
    );
  }

}

export default Team;