import React, { Component } from 'react';
import Name from './Name';
import Links from './Links';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      githubHoverState: 'default',
      linkedinHoverState: 'default',
      nameHoverState: 'name-default',
    };
    this.hoverGithub = this.hoverGithub.bind(this);
    this.hoverLinkedin = this.hoverLinkedin.bind(this);
    this.toDefault = this.toDefault.bind(this);
  }

  hoverGithub() {
    this.setState({
      githubHoverState: 'github',
      nameHoverState: 'name-github',
    });
  }

  hoverLinkedin() {
    this.setState({
      linkedinHoverState: 'linkedin',
      nameHoverState: 'name-linkedin',
    });
  }

  toDefault() {
    this.setState({
      githubHoverState: 'default',
      linkedinHoverState: 'default',
      nameHoverState: 'name-default',
    });
  }

  render() {
    const { githubHoverState, linkedinHoverState, nameHoverState } = this.state;
    return (
      <div id="page">
        <Name nameHoverState={nameHoverState} />
        <Links
          githubHoverState={githubHoverState}
          linkedinHoverState={linkedinHoverState}
          hoverGithub={this.hoverGithub}
          hoverChange={this.hoverLinkedin}
          toDefault={this.toDefault}
        />
      </div>
    );
  }
}

export default App;
