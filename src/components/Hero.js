import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading } from 'grommet';
import SignUpButtons from './SignUpButtons';
import Container from '../shared-components/Container';

const Hero = ({ title, slogan }) => (
  <Box as="section" align="center" justify="center">
    <Container pad={{ vertical: 'xlarge', horizontal: 'small' }}>
      <Heading level="1" margin="none">
        {title}
      </Heading>
      <Heading level="2">{slogan}</Heading>
      <Box direction="row" align="center" justify="start" wrap>
        <SignUpButtons position="left" />
      </Box>
    </Container>
  </Box>
);

Hero.propTypes = {
  title: PropTypes.string,
  slogan: PropTypes.string,
};

Hero.defaultProps = {
  title: '',
  slogan: '',
};

export default Hero;
