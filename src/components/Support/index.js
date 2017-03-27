import React, { Component } from 'react';
import PageTitle from '../PageTitle';
import renderHTML from 'react-render-html';

import data from './support.json';

import './support.css';

class Support extends Component {

  render() {
    const GiveBadge = "https://www.give.net/pages/assets/uimages/support_buttons/Givenet-SUPPORT-button-SMALL-white.png";

    return(
      <div>
        <PageTitle title={data.title} />
        {renderHTML(data.body)}
        <div className="give-badge">
          <a href="https://www.give.net/20216945" className="give-link"><img src={ GiveBadge } /></a>
        </div>
      </div>
    );
  }

}

export default Support