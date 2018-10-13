import React from 'react';
import './Links.css';

const Links = ({ hoverState, hoverChange, toDefault }) => (
  <div id="right">
    <a className={hoverState} onMouseEnter={hoverChange} onMouseLeave={toDefault} href="gooogle.com">Google</a>
    <br />
    <a className={`${hoverState}`} href="gooogle.com">Linkedin</a>
  </div>
);

export default Links;
