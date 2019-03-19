import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Text, Button } from 'grommet';
import Container from '../shared-components/Container';

const Contact = ({ email, facebook }) => (
  <Container align="center" justify="center">
    <Heading level="2">Want to talk to us?</Heading>
    <Text
      responsive
      textAlign="center"
      color="text-gray"
      margin={{ bottom: 'medium' }}
    >
      We&apos;d love to hear from you!
    </Text>
    <Box direction="column" align="center" justify="center" wrap>
      <Button
        primary
        href={`mailto:${email}`}
        label="Email Us"
        margin="small"
      />
      <Text color="text-gray">or</Text>
      <Button
        href={facebook}
        target="_blank"
        rel="noopener noreferrer"
        label="Message us on Facebook"
        margin="small"
      />
    </Box>
  </Container>
);

Contact.propTypes = {
  email: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired,
};

export default Contact;
