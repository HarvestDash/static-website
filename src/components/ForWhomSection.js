import React from 'react';
import { Box, Heading, Grid } from 'grommet';

const ForWhom = () => (
  <Box as="section">
    <Box justify="center" align="center">
      <Heading level="2">FarmGoat is for</Heading>
    </Box>
    <Box justify="center" align="center">
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
          Buyers
        </Box>
      </Grid>
    </Box>
  </Box>
);

export default ForWhom;
