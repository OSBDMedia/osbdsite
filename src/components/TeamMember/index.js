import React, { Component } from 'react';

import './TeamMember.css';

class TeamMember extends Component {

  render() {

    //const dogPath = ;
    const dog = require("./images/" + this.props.data.dog);

    return (
      <div className="Team-Member">
        <TeamMemberDog
          img={dog}
          name={this.props.data.name}
        />
        <h4>{this.props.data.name}</h4>
        <div>{this.props.data.role}</div>
      </div>
    );
  }
}

class TeamMemberDog extends Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          className="person-logo"
          alt={this.props.name + " dog"}
        />
      </div>
    );
  }
}

export default TeamMember;