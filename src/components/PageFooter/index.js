import React, { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome  from 'react-fontawesome';
import { Container, Row, Col } from 'react-grid-system';
import logo from './../../osbd_dog_sml.svg';

import data from './pagefooter.json';
import './footer.css';

class PageFooter extends Component {

  render() {

    let links;
    links = data.links.map(function(item, i) {
      return <a href={item.url} title={item.title} key={i}><FontAwesome name={item.type} /></a>;
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
                  <Col xs={6} md={4}>
                    <Link to="/" className="logo-title">
                      <img src={logo} className="footer-logo" alt="One Small Barking Dog" />
                    </Link>
                  </Col>
                  <Col xs={6} md={8}>
                    <div md={4} className="links">
                      {links}
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col md={6} className="ambitions">
                <p>Our ambitions:</p>
                <ol>
                  {ambitions}
                </ol>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    );
  }
}

export default PageFooter;