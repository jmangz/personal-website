import React, { Component } from 'react';
import Name from './Name';
import Links from './Links';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div id="page">
        <Name />
        <Links />
      </div>
    );
  }
}

export default App;
