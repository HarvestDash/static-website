import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'grommet';

const NavButton = ({ name, icon }) => (
  <Box align="center" justify="center" pad={{ vertical: '0.5em' }}>
    {icon}
    <Text size="xsmall">{name}</Text>
  </Box>
);

NavButton.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default NavButton;
