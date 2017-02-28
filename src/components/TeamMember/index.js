import React, { Component } from 'react';

import './TeamMember.css';

class TeamMember extends Component {

  render() {
    return (
      <div className="Team-Member">
        <h4>{this.props.data.name}</h4>
        <div>{this.props.data.role}</div>
      </div>
    );
  }
}

export default TeamMember;