import React, { Component } from 'react';
import TeamMember from '../TeamMember';
import PageTitle from '../PageTitle';
//import renderHTML from 'react-render-html';

import data from './team.json';

class Team extends Component {

  render() {
    let teamMembers;
    teamMembers = data.team.map(function(item, i) {
      return <TeamMember data={item} key={i} />;
    });

    return (
      <div>
        <PageTitle title={data.title} />
        <article className="body">
          {teamMembers}
        </article>
      </div>
    );
  }

}

export default Team;