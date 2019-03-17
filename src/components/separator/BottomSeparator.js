import React from 'react';
import PropTypes from 'prop-types';

const BottomSeparator = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 160" fill={color}>
    <polygon points="0,160 0,0 1440,0 " />
  </svg>
);

BottomSeparator.propTypes = {
  color: PropTypes.string.isRequired,
};

export default BottomSeparator;
