import React from 'react';
import { Box, Heading } from 'grommet';
import { Grow, BusinessService } from 'grommet-icons';
import Container from '../shared-components/Container';

const ForWhom = () => (
  <Container justify="center" align="center">
    <Heading level="2">HarvestDash is for</Heading>
    <Box width="100%" justify="around" align="center" direction="row" wrap>
      <Box justify="center" align="center" margin="large" direction="column">
        <Grow color="brand" size="xlarge" />
        <Heading level="3">Urban Farmers</Heading>
      </Box>
      <Box justify="center" align="center" margin="large" direction="column">
        <BusinessService color="brand" size="xlarge" />
        <Heading level="3">Local Businesses</Heading>
      </Box>
    </Box>
  </Container>
);

export default ForWhom;
