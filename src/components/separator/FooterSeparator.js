import React from 'react';
import PropTypes from 'prop-types';
import StyledSvg from './StyledSvg';

const FooterSeparator = ({ color }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 160"
    fill={color}
  >
    <path d="M0,160V0h1440v160c0,0-157.1-122.2-478.2-122.2S0,160,0,160z" />
  </StyledSvg>
);

FooterSeparator.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FooterSeparator;
