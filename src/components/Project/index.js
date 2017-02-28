import React, { Component } from 'react';
import renderHTML from 'react-render-html';

class Project extends Component {

  render() {
    return (
      <div className="Project">
        <h3 className="title">{this.props.data.title}</h3>
        <p className="dates">{renderHTML(this.props.data.dates)}</p>
        <div className="description">
          {renderHTML(this.props.data.description)}
        </div>
      </div>
    );
  }
}

export default Project;