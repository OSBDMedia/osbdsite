import React, { Component } from 'react';
import YouTube from 'react-youtube';
import renderHTML from 'react-render-html';
import "./project.css";

class Project extends Component {

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  render() {

    const opts = {
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div className="Project">
        <h3 className="title">{this.props.data.title}</h3>
        { this.props.data.dates.length > 0 &&
        <p className="dates">{renderHTML(this.props.data.dates)}</p>
        }
        <div className="description">
          {renderHTML(this.props.data.description)}
        </div>
        { Object.keys(this.props.data.video).length > 0 &&
        <div className="video">
          <YouTube
            videoId={this.props.data.video.videoId}
            opts={opts}
            onReady={this._onReady}
          />
        </div>
        }

      </div>
    );
  }
}

export default Project;