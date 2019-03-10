import React from 'react';
import { Box, Text, Heading } from 'grommet';
import Container from '../shared-components/Container';

const Features = () => (
  <Box as="section" justify="center" align="center">
    <Text responsive textAlign="center" size="medium" weight="bold">
      Farmgoat enables transparent selling and buying agricultural products.
      <br />
      Sell Directly to buyers and buy directly from urban farmers.
    </Text>
    <Container justify="center" align="center">
      <Box>1</Box>
      <Box>1</Box>
      <Box>1</Box>
      <Box>1</Box>
    </Container>
  </Box>
);

export default Features;
