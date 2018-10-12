import React from 'react';
import './Links.css';

const Links = ({ hoverState, hoverChange }) => (
  <div id="right">
    <a className={`${hoverState}`} href="gooogle.com">Linkedin</a>
    <br />
    <a className={`${hoverState}`} href="gooogle.com">Linkedin</a>
  </div>
);

export default Links;
