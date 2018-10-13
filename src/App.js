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
    this.toDefault = this.toDefault.bind(this);
  }

  hoverLinkedin() {
    this.setState({
      hoverState: 'linkedin',
    });
  }

  toDefault() {
    this.setState({
      hoverState: 'default',
    });
  }

  render() {
    const { hoverState } = this.state;
    return (
      <div id="page">
        <Name hoverState={hoverState} />
        <Links
          hoverState={hoverState}
          hoverChange={this.hoverLinkedin}
          toDefault={this.toDefault}
        />
      </div>
    );
  }
}

export default App;
