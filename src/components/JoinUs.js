import React from 'react';
import { Box, Heading, Text } from 'grommet';
import SignUpButtons from './SignUpButtons';
import Container from '../shared-components/Container';

const JoinUs = () => (
  <Container align="center" justify="center">
    <Heading level="2">Join Us Today!</Heading>
    <Text
      as="p"
      responsive
      textAlign="center"
      margin={{ top: 'none', bottom: 'medium', horizontal: 'medium' }}
    >
      If you&apos;re an <strong>urban farmer</strong>, interested in marketing
      and selling your produce online or if you&apos;re a{' '}
      <strong>local business</strong>, interested in buying agricultural
      products directly from farms, join us today! Registration is free!
    </Text>
    <Box direction="row" align="center" justify="center" wrap>
      <SignUpButtons position="center" />
    </Box>
  </Container>
);

export default JoinUs;
