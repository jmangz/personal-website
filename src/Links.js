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
    <a className={linkedinHoverState} onMouseEnter={hoverChange} onMouseLeave={toDefault} href="gooogle.com">Google</a>
    <br />
    <a className={githubHoverState} onMouseEnter={hoverGithub} onMouseLeave={toDefault} href="gooogle.com">Linkedin</a>
  </div>
);

export default Links;
