import React from 'react';
import styled from 'styled-components';
import { Box, Heading, Text, Grid } from 'grommet';
import Container from '../shared-components/Container';

const ForWhom = () => (
  <Box as="section">
    <Box
      justify="center"
      align="center"
    >
      <Text>FarmGoat is For</Text>
    </Box>
    <Box justify="center" align="center">
      <Grid
        rows={['medium', 'medium']}
        columns={['medium', 'medium']}
        gap="large"
        margin={{ top: '50px' }}
      >
        <Box background="light-5" align="center" justify="center">Urban Farmers</Box>
        <Box background="light-2" align="center" justify="center">Buyers</Box>
      </Grid>
    </Box>
  </Box>
);

export default ForWhom;
