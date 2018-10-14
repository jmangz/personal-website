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
      leftPageState: 'left-default',
      rightPageState: 'right-default',

    };
    this.hoverGithub = this.hoverGithub.bind(this);
    this.hoverLinkedin = this.hoverLinkedin.bind(this);
    this.toDefault = this.toDefault.bind(this);
  }

  hoverGithub() {
    console.log('wtf');
    this.setState({
      githubHoverState: 'github',
      nameHoverState: 'name-github',
      linkHoverState: 'github',
      leftPageState: 'left-github',
      rightPageState: 'right-github',
    });
  }

  hoverLinkedin() {
    this.setState({
      linkedinHoverState: 'linkedin',
      nameHoverState: 'name-linkedin',
      linkHoverState: 'linkedin',
      leftPageState: 'left-linkedin',
      rightPageState: 'right-linkedin',
    });
  }

  toDefault() {
    this.setState({
      githubHoverState: 'default',
      linkedinHoverState: 'default',
      nameHoverState: 'name-default',
      linkHoverState: 'default',
      leftPageState: 'left-default',
      rightPageState: 'right-default',
    });
  }

  render() {
    const {
      githubHoverState, linkHoverState, linkedinHoverState, nameHoverState, leftPageState, rightPageState,
    } = this.state;
    return (
      <div id="page">
        <Name leftPageState={leftPageState} nameHoverState={nameHoverState} linkHoverState={linkHoverState} />
        <Links
          githubHoverState={githubHoverState}
          linkedinHoverState={linkedinHoverState}
          hoverGithub={this.hoverGithub}
          hoverChange={this.hoverLinkedin}
          toDefault={this.toDefault}
          rightPageState={rightPageState}
        />
      </div>
    );
  }
}

export default App;
