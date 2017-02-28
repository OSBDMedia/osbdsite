import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import renderHTML from 'react-render-html';
//import { Link } from 'react-router';
import data from './about.json';

class About extends Component {


  //componentDidMount() {
  //  document.title = 'One Small Barking Dog | About';
  //}


  render() {

    var pageTitle = 'One Small Barking Dog | ' + data.title;

    return (
      <div>
        <DocumentTitle title={pageTitle}>
          <h1>{data.title}</h1>
        </DocumentTitle>
        <article className="body">
          {renderHTML(data.body)}
        </article>
      </div>
    );
  }
}

export default About;
