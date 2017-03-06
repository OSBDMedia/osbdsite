import React, { Component } from 'react';
import PageTitle from '../PageTitle';
import renderHTML from 'react-render-html';

import data from './support.json';

class Support extends Component {

  render() {
    return(
      <div>
        <PageTitle title={data.title} />
        {renderHTML(data.body)}
      </div>
    );
  }

}

export default Support