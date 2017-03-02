import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Project from '../Project';
//import renderHTML from 'react-render-html';

import data from './projects.json';

class Team extends Component {

  render() {
    let projects;
    projects = data.projects.map(function(item, i) {
      return <Project data={item} key={i} />;
    });
    var pageTitle = "One Small Barking Dog | " + data.title;

    return (
      <div>
        <header>
          <DocumentTitle title={pageTitle}>
            <h1>{data.title}</h1>
          </DocumentTitle>
        </header>
        <main>
          {projects}
        </main>
      </div>
    );
  }

}

export default Team;