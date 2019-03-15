import React from 'react';
import { Box, Heading, Text, Button } from 'grommet';
import Container from '../shared-components/Container';

const Contact = () => (
  <Container align="center" justify="center">
    <Heading level="2">Want to talk to us?</Heading>
    <Text
      size="large"
      responsive
      textAlign="center"
      margin={{ bottom: 'medium' }}
    >
      We&apos;d love to hear from you!
    </Text>
    <Box direction="column" align="center" justify="center" wrap>
      <Button primary label="Email Us" margin="small" />
      <Text>or</Text>
      <Button label="Message us on Facebook" margin="small" />
    </Box>
  </Container>
);

export default Contact;
