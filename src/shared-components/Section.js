import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Section = ({ children, as, align, justify, pad, ...rest }) => (
  <Box
    as={as || 'section'}
    align={align || 'center'}
    justify={justify || 'center'}
    pad={pad || { vertical: 'large', horizontal: 'large' }}
    {...rest}
  >
    {children}
  </Box>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  pad: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

Section.defaultProps = {
  as: 'section',
  align: 'center',
  justify: 'center',
  pad: { vertical: 'large', horizontal: 'large' },
};

export default Section;
