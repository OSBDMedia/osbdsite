import React, { Component } from 'react';
import PageTitle from '../PageTitle';
import renderHTML from 'react-render-html';
//import { Link } from 'react-router';
import data from './about.json';
import "./about.css";

import oldDog from './images/osbd_dog.png';
import newDog from './images/dog-solo-color.svg';

class About extends Component {


  render() {
    return (
      <div>
        <PageTitle title={data.title} />
        <article className="body">
          <aside className="right">
            <img src={oldDog} title="Old Dog" className="logo old-dog" role="presentation" />
            <div className="text">Old Dog</div>
          </aside>

          {renderHTML(data.body)}
          <aside className="right">
            <img src={newDog} title="New Dog" className="logo new-dog" role="presentation" />
            <div className="text">New era, new Dog</div>
          </aside>
          { renderHTML(data.bodynew) }
          <aside className="registrations">
            <p><strong>Charity Number:</strong> { data.registrations.charity }</p>
            <p><strong>VAT Registration Number:</strong> { data.registrations.vat }</p>
            <p><strong>Company Number:</strong> { data.registrations.company }</p>
          </aside>
        </article>
      </div>
    );
  }
}

export default About;
