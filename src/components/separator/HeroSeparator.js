import React from 'react';
import PropTypes from 'prop-types';
import StyledSvg from './StyledSvg';

const HeroSeparator = ({ color }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 160"
    fill={color}
  >
    <g>
      <path d="M1440,160v-2C823.4,158,548.9,0,0,0l0,160H1440z" />
    </g>
  </StyledSvg>
);

HeroSeparator.propTypes = {
  color: PropTypes.string.isRequired,
};

export default HeroSeparator;
