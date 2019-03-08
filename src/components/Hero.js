import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Button, Heading, Text, TextInput } from 'grommet';
import Container from '../shared-components/Container';

const StyledTextInput = styled(TextInput)`
  font-weight: normal;
`;

const Hero = ({ title, slogan }) => (
  <Box as="section" align="center" justify="center">
    <Container pad={{ vertical: 'xlarge', horizontal: 'small' }}>
      <Heading level="1" margin="none">
        {title}
      </Heading>
      <Heading level="2">{slogan}</Heading>
      <Text as="label" name="email" margin={{ bottom: 'xsmall' }}>
        Email
      </Text>
      <Box direction="row" align="center" justify="start" wrap>
        <Box width="50%" align="start">
          <StyledTextInput type="email" name="email" placeholder="your email" />
        </Box>
        <Button primary label="Sign Up Now" margin={{ left: 'small' }} />
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
