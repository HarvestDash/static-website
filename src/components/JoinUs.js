import React from 'react';
import { Box, Heading, Text } from 'grommet';
import SignUpButtons from './SignUpButtons';
import Container from '../shared-components/Container';

const JoinUs = () => (
  <Box as="section" align="center" justify="center">
    <Container
      align="center"
      justify="center"
      pad={{ vertical: 'large', horizontal: 'small' }}
    >
      <Heading level="2">Join Us Today!</Heading>
      <Text responsive textAlign="center" margin={{ bottom: 'medium' }}>
        If you&apos;re an <strong>urban farmer</strong>, interested in marketing
        and selling your produce online or if you&apos;re a{' '}
        <strong>local business</strong>, interested in buying agricultural
        products directly from farms, join us today! Registration is free!
      </Text>
      <Box direction="row" align="center" justify="center" wrap>
        <SignUpButtons position="center" />
      </Box>
    </Container>
  </Box>
);

export default JoinUs;
