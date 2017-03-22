import React, { Component } from 'react';
import TeamMember from '../TeamMember';
import PageTitle from '../PageTitle';
import { Container, Row, Col } from 'react-grid-system';
//import renderHTML from 'react-render-html';

import data from './team.json';

class Team extends Component {

  render() {
    let teamMembers;
    teamMembers = data.team.map(function(item, i) {
      return <Col md={6}><TeamMember data={item} key={i} /></Col>;
    });

    return (
      <div>
        <PageTitle title={data.title} />
        <article className="body">
          <Container>
            <Row>
            {teamMembers}
            </Row>
          </Container>
        </article>
      </div>
    );
  }

}

export default Team;