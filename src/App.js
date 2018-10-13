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
      linkHoverState: 'default',
    };
    this.hoverGithub = this.hoverGithub.bind(this);
    this.hoverLinkedin = this.hoverLinkedin.bind(this);
    this.toDefault = this.toDefault.bind(this);
  }

  hoverGithub() {
    this.setState({
      githubHoverState: 'github',
      nameHoverState: 'name-github',
      linkHoverState: 'github',
    });
  }

  hoverLinkedin() {
    this.setState({
      linkedinHoverState: 'linkedin',
      nameHoverState: 'name-linkedin',
      linkHoverState: 'linkedin',
    });
  }

  toDefault() {
    this.setState({
      githubHoverState: 'default',
      linkedinHoverState: 'default',
      nameHoverState: 'name-default',
      linkHoverState: 'default',
    });
  }

  render() {
    const {
      githubHoverState, linkHoverState, linkedinHoverState, nameHoverState,
    } = this.state;
    return (
      <div id="page">
        <Name nameHoverState={nameHoverState} linkHoverState={linkHoverState} />
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
