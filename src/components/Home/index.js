import React, { Component } from 'react';
//import { Link } from 'react-router';
import DocMeta from 'react-doc-meta';
import twitterImage from './images/osbd_home.jpg';
import MediaQuery from 'react-responsive';
import video from '../../assets/osbd-decorations-01.mp4';
import bgImage from './images/osbd-decorations-01.jpg';
import './Home.css';

class Home extends Component {

  componentDidMount() {
    document.title = 'One Small Barking Dog | Home';
  }

  render() {

    var tags = [
      {name: 'description', content: 'Engaging young people and emerging culture through training and creating.'},
      {itemProp: 'name', content: 'One Small Barking Dog'},
      {itemProp: 'description', content: 'Engaging young people and emerging culture through training and creating.'},
      {itemProp: 'image', content: {twitterImage}},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@osbd'},
      {name: 'twitter:creator', content: '@osbd'},
      {name: 'twitter:title', content: 'One Small Barking Dog'},
      {name: 'twitter:description', content: 'Engaging young people and emerging culture through training and creating.'},
      {name: 'twitter:image', content: {twitterImage}}
    ];

    var divImage = {
      backgroundImage: "url(" + bgImage + ")",
      backgroundSize: "cover"
    };

    return (
      <div className="Home">
        <MediaQuery minDeviceWidth={992}>
          <video playsInline="true" autoPlay="true" muted loop poster={bgImage} className="bgvid">
            <source src={ video } type="video/mp4" />
          </video>
        </MediaQuery>
        <MediaQuery maxDeviceWidth={992}>
          <div className="bgimg" style={divImage}></div>
        </MediaQuery>
        <DocMeta tags={tags}/>

        <main className="App-intro">
          <h2>Engaging young people and emerging culture through training and creating</h2>
        </main>
      </div>
    );

  }

}

export default Home;