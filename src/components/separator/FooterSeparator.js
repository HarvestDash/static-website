import React from 'react';
import PropTypes from 'prop-types';
import StyledSvg from './StyledSvg';

const FooterSeparator = ({ color }) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 160"
    fill={color}
  >
    <path d="M478.2,37.8C157.1,37.8,0,160,0,160L0,0l1440,0v160C1440,160,799.3,37.8,478.2,37.8z" />
  </StyledSvg>
);

FooterSeparator.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FooterSeparator;
