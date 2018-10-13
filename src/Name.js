import React from 'react';
import './Name.css';

const Name = ({ nameHoverState }) => (
  <div id="left">
    <p className={nameHoverState}>Eric Chou!!!!</p>
  </div>
);

export default Name;
