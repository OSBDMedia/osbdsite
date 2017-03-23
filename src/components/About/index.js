import React, { Component } from 'react';
import PageTitle from '../PageTitle';
import renderHTML from 'react-render-html';
//import { Link } from 'react-router';
import data from './about.json';

class About extends Component {


  render() {
    return (
      <div>
        <PageTitle title={data.title} />
        <article className="body">
          {renderHTML(data.body)}
        </article>
      </div>
    );
  }
}

export default About;