import React from 'react';
import PropTypes from 'prop-types';
import './Links.css';

const Links = ({
  githubHoverState,
  linkedinHoverState,
  hoverGithub,
  hoverLinkedin,
  toDefault,
  rightPageState,
}) => (
  <div className={rightPageState}>
    <div className="introduction-paragraph">
      <p className="name-character">S</p>
      <p className="name-character">o</p>
      <p className="name-character">f</p>
      <p className="name-character">t</p>
      <p className="name-character">w</p>
      <p className="name-character">a</p>
      <p className="name-character">r</p>
      <p className="name-character">e </p>
      <p className="name-character">E</p>
      <p className="name-character">n</p>
      <p className="name-character">g</p>
      <p className="name-character">i</p>
      <p className="name-character">n</p>
      <p className="name-character">e</p>
      <p className="name-character">e</p>
      <p className="name-character">r</p>
    </div>
    <div className="links">
      <a className={linkedinHoverState} onMouseEnter={hoverLinkedin} onMouseLeave={toDefault} href="https://linkedin.com/in/echou1/">Linkedin</a>
      <a className={githubHoverState} onMouseEnter={hoverGithub} onMouseLeave={toDefault} href="https://github.com/jmangz">Github</a>
    </div>
  </div>
);

Links.propTypes = {
  githubHoverState: PropTypes.string.isRequired,
  linkedinHoverState: PropTypes.string.isRequired,
  hoverGithub: PropTypes.func.isRequired,
  hoverLinkedin: PropTypes.func.isRequired,
  toDefault: PropTypes.func.isRequired,
  rightPageState: PropTypes.string.isRequired,
};

export default Links;
