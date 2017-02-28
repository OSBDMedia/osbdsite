import React, { Component } from 'react';
import { Link } from 'react-router';
import DocMeta from 'react-doc-meta';
import Navigation from '../Navigation';
import logo from './../../osbd_dog_sml.svg';
import './app.css';

class App extends Component {

  componentDidMount() {
  }

  render() {

    var tags = [
      {name: "viewport", content: "width=device-width, initial-scale=1.0"}
    ];

    var currentPath = this.props.router.getCurrentLocation().pathname;
    var currentRoute = this.props.routes.filter(route => route.path === currentPath);
    var className = currentRoute[0].indexRoute ? currentRoute[0].indexRoute.name : currentRoute[0].name;
    return (
      <div className={["App", className].join(' ') }>
        <DocMeta tags={tags}/>
        <header className="App-header">
          <div className="inner">
            <Link to="/" className="logo-title">
              <img src={logo} className="App-logo" alt="One Small Barking Dog" />
              <h2 className="App-title">
                One<br />
                Small<br />
                Barking<br />
                Dog</h2>
            </Link>
            <Navigation />
          </div>
        </header>
        <main className="App-body">
          <div className="App-body-inner">
          {this.props.children}
          </div>
        </main>
      </div>
    );
  }
}

export default App;
