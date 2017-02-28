import React, { Component } from 'react';
import { Link } from 'react-router';
const FaBars = require('react-icons/lib/fa/bars');

import './navigation.css';

class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: window.innerWidth,
      mobileNavVisible: false
    };
  }

  handleResize() {
    this.setState({windowWidth: window.innerWidth});
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }

  navigationLinks() {
    return [
      <ul key={0}>
        <li key={1}><Link to="about" activeClassName="active">About</Link></li>
        <li key={2}><Link to="team" activeClassName="active">Team</Link></li>
        <li key={3}><Link to="projects" activeClassName="active">Projects</Link></li>
        <li key={4}><a href="https://medium.com/@osbd">Blog</a></li>
        <li key={5}><Link to="contact" activeClassName="active">Contact</Link></li>
      </ul>
    ];
  }

  renderMobileNav() {
    if(this.state.mobileNavVisible) {
      return this.navigationLinks();
    }
  }

  handleNavClick() {
    if(!this.state.mobileNavVisible) {
      this.setState({mobileNavVisible: true});
    } else {
      this.setState({mobileNavVisible: false});
    }
  }

  renderNavigation() {
    if(this.state.windowWidth <= 800) {
      return [
        <div key={8} className="mobile-nav">
          <p onClick={this.handleNavClick.bind(this)}>
            <FaBars />
          </p>
          {this.renderMobileNav()}
        </div>
      ];
    } else {
      return [
        <div key={9} className="nav-menu">
          {this.navigationLinks()}
        </div>
      ];
    }
  }

  render() {
    return (
      <nav className="nav-container">
      { this.renderNavigation() }
      </nav>
    );
  }
}

export default Navigation;