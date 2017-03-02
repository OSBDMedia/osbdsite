import React, { Component } from 'react';
import renderHtml from 'react-render-html';
import PageTitle from '../PageTitle';

import data from './contact.json';

class Contact extends Component {

  render() {
    return (
      <div>
        <PageTitle title={data.title} />
        <article className="body">
          {renderHtml(data.body)}
        </article>
      </div>
    );
  }
}

export default Contact;