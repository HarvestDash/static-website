import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';

const Container = ({ children, ...rest }) => (
  <Box width="1028px" {...rest}>
    {children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
