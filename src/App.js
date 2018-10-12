import React, { Component } from 'react';
import Name from './Name';
import Links from './Links';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      hoverState: 'default',
    };
    this.hoverLinkedin = this.hoverLinkedin.bind(this);
  }

  hoverLinkedin() {
    this.setState({
      hoverState: 'linkedin',
    });
  }

  render() {
    const { hoverState } = this.state;
    return (
      <div id="page">
        <Name hoverState={hoverState} />
        <Links hoverState={hoverState} hoverChange={this.hoverLinkedIn} />
      </div>
    );
  }
}

export default App;
