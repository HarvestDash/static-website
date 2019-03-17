import React from 'react';
import PropTypes from 'prop-types';

const FooterSeparator = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" fill={color}>
    <path d="M0,160c0,0,548-141,936-141c336,0,504,141,504,141H0z" />
  </svg>
);

FooterSeparator.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FooterSeparator;
