import React, { Component } from 'react';
import PageTitle from '../PageTitle';
import renderHTML from 'react-render-html';
//import { Link } from 'react-router';
import data from './about.json';
import "./about.css";

class About extends Component {


  render() {
    return (
      <div>
        <PageTitle title={data.title} />
        <article className="body">
          {renderHTML(data.body)}
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
