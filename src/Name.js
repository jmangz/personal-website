import React from 'react';
import './Name.css';

const Name = ({ leftPageState, nameHoverState, linkHoverState }) => {
  let description = '';

  if (linkHoverState === 'linkedin') {
    description = 'Free free to connect!';
  } else if (linkHoverState === 'github') description = 'Millions of stars';
  else description = '';
  return (
    <div className={leftPageState}>
      <div className={nameHoverState}>
        <p className="name-character">E</p>
        <p className="name-character">r</p>
        <p className="name-character">i</p>
        <p className="name-character">c</p>
      </div>
      <div className={nameHoverState}>
        <p className="name-character">C</p>
        <p className="name-character">h</p>
        <p className="name-character">o</p>
        <p className="name-character">u</p>
      </div>
      <div className="link-description">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Name;
