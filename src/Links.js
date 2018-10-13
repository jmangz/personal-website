import React from 'react';
import './Links.css';

const Links = ({
  githubHoverState,
  linkedinHoverState,
  hoverGithub,
  hoverChange,
  toDefault,
  rightPageState,
}) => (
  <div className={rightPageState}>
    <p className="introduction-paragraph">Software Engineer</p>
    <div className="links">
      <a className={linkedinHoverState} onMouseEnter={hoverChange} onMouseLeave={toDefault} href="https://linkedin.com/in/echou1/">Linkedin</a>
      <a className={githubHoverState} onMouseEnter={hoverGithub} onMouseLeave={toDefault} href="gooogle.com">Github</a>
    </div>
  </div>
);

export default Links;
