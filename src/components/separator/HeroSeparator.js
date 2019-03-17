import React from 'react';
import PropTypes from 'prop-types';

const HeroSeparator = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" fill={color}>
    <g>
      <path
        d="M0,160 L0,0 C548.949848,3.38469e-14 823.425766,157.977 1440,157.977 L1440,160 L0,160 Z"
        transform="matrix(-1 0 0 1 1440 0)"
      />
    </g>
  </svg>
);

HeroSeparator.propTypes = {
  color: PropTypes.string.isRequired,
};

export default HeroSeparator;
