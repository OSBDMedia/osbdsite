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
          <p><strong>Email:</strong> <a href="mailto:{data.email}" role="presentation">{data.email}</a> </p>
          <p><strong>Phone Pip Piper:</strong> { data.phone }</p>
        </article>
      </div>
    );
  }
}

export default Contact;