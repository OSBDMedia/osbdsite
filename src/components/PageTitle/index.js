import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

class PageTitle extends Component {

  render() {
    var pageTitle = "One Small Barking Dog | " + this.props.title;
    return (
      <DocumentTitle title={pageTitle}>
        <h1>{this.props.title}</h1>
      </DocumentTitle>
    );
  }
}

export default PageTitle;