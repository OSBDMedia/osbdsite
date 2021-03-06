import React, { Component } from 'react';
//import { Link } from 'react-router';
import DocMeta from 'react-doc-meta';
import twitterImage from './images/osbd-home-tw.jpg';
import MediaQuery from 'react-responsive';
import video from './video/osbd-home-03.mp4';
import videoOgg from './video/osbd-home-03.ogg';
import videoWebm from './video/osbd-home-03.webm';
import bgImage from './images/osbd-home.jpg';
import './Home.css';

class Home extends Component {

  componentDidMount() {
    document.title = 'One Small Barking Dog | Home';
  }

  render() {

    var tags = [
      {name: 'description', content: 'Innovative media for contemporary culture.'},
      {itemProp: 'name', content: 'One Small Barking Dog'},
      {itemProp: 'description', content: 'Innovative media for contemporary culture.'},
      {itemProp: 'image', content: twitterImage},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: 'OSBD'},
      {name: 'twitter:creator', content: '@osbd'},
      {name: 'twitter:title', content: 'One Small Barking Dog'},
      {name: 'twitter:description', content: 'Innovative media for contemporary culture.'},
      {name: 'twitter:image', content: twitterImage},
      {name: 'og:title', content: 'One Small Barking Dog'},
      {name: 'og:image', content: twitterImage},
      {name: 'og:description', content: 'Innovative media for contemporary culture.'},
      {name: 'og:site_name', content: 'OSBD'},
      {name: 'og:locale', content: 'en_GB'}
    ];

    var divImage = {
      backgroundImage: "url(" + bgImage + ")",
      backgroundSize: "cover",
      backgroundPosition: "right center"
    };

    return (
      <div className="Home">
        <MediaQuery minDeviceWidth={1024}>
          <video playsInline="true" autoPlay="true" muted loop poster={bgImage} className="bgvid">
            <source src={ video } type="video/mp4" />
            <source src={ videoOgg } type="video/ogg" />
            <source src={ videoWebm } type="video/webm" />
          </video>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1024} >
          <div className="bgimg" style={divImage}></div>
        </MediaQuery>
        <DocMeta tags={tags}/>

        <main className="home-intro">
          <h1>Innovative media for contemporary culture</h1>
        </main>
      </div>
    );

  }

}

export default Home;