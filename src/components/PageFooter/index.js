import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome  from 'react-fontawesome';
import { Container, Row, Col } from 'react-grid-system';
import logo from './../../dog-solo-white.svg';

import data from './pagefooter.json';
import './footer.css';

class PageFooter extends Component {

  render() {

    const GiveBadge = "https://www.give.net/pages/assets/uimages/support_buttons/Givenet-SUPPORT-button-SMALL-white.png";

    let links;
    links = data.links.map(function(item, i) {
      return item.active ? <a href={item.url} title={item.title} key={i}><FontAwesome name={item.type} /></a> : "";
    });

    let ambitions;
    ambitions = data.ambitions.map(function(item, i) {
      return <li key={i}>{item.title}</li>;
    });
    return (
      <footer>
        <div className="inner">
          <Container>
            <Row>
              <Col md={6} className="logo-links">
                <Row>
                  <Col xs={3}>
                    <Link to="/" className="logo-title">
                      <img src={logo} className="footer-logo" alt="One Small Barking Dog" />
                    </Link>
                  </Col>
                  <Col xs={4}>
                    <div className="links">
                      {links}
                    </div>
                  </Col>
                  <Col xs={5}>
                    <a href="https://www.give.net/20216945" className="give-link" target="new"><img src={ GiveBadge } role="presentation" /></a>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="ambitions">
                <p>What we do:</p>
                <ol>
                  {ambitions}
                </ol>
                <Link to="/about">
                  Read more
                </Link>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    );
  }
}

export default PageFooter;