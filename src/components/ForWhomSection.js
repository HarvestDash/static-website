import React from 'react';
import { Box, Heading, Grid } from 'grommet';
import Container from '../shared-components/Container';

const ForWhom = () => (
  <Box as="section" justify="center" align="center">
    <Container  justify="center" align="center">
      <Heading level="2">FarmGoat is for</Heading>
    </Container>
    <Container justify="center" align="center">
      <Grid
        rows={['medium', 'medium']}
        columns={['medium', 'medium']}
        gap="large"
        margin={{ top: '50px' }}
      >
        <Box background="light-5" align="center" justify="center">
          Urban Farmers
        </Box>
        <Box background="light-2" align="center" justify="center">
          Local Businesses
        </Box>
      </Grid>
    </Container>
  </Box>
);

export default ForWhom;
