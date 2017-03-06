import React, { Component } from 'react';
import PageTitle from '../PageTitle';

import data from './support.json';

class Support extends Component {

  render() {
    return(
      <div>
        <PageTitle title={data.title} />

      </div>
    );
  }

}

export default Support