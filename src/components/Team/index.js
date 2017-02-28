import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import TeamMember from '../TeamMember';
//import renderHTML from 'react-render-html';

import data from './team.json';

class Team extends Component {

  render() {
    let teamMembers;
    teamMembers = data.team.map(function(item) {
      return <TeamMember data={item} />;
    });


    return (
      <div>
        <header>
          <DocumentTitle title={data.title}>
            <h1>{data.title}</h1>
          </DocumentTitle>
        </header>
        <main>
          {teamMembers}
        </main>
      </div>
    );
  }

}

export default Team;