import React from 'react';
import './Links.css';

const Links = ({
  githubHoverState,
  linkedinHoverState,
  hoverGithub,
  hoverChange,
  toDefault,
}) => (
  <div id="right">
    <a className={linkedinHoverState} onMouseEnter={hoverChange} onMouseLeave={toDefault} href="https://linkedin.com/in/echou1/">Linkedin</a>
    <br />
    <a className={githubHoverState} onMouseEnter={hoverGithub} onMouseLeave={toDefault} href="gooogle.com">Github</a>
  </div>
);

export default Links;
