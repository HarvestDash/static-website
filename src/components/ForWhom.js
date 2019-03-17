import React from 'react';
import { Box, Heading, Text } from 'grommet';
import styled from 'styled-components';
import { Grow, BusinessService } from 'grommet-icons';
import Container from '../shared-components/Container';

const BoxDesc = styled(Box)`
  width: 300px;
  height: 300px;
`;

const ForWhom = () => (
  <Container justify="center" align="center">
    <Heading level="2">FarmGoat is for</Heading>
    <Box justify="center" align="center" direction="row" wrap>
      <BoxDesc justify="center" align="center" margin="25px" direction="column">
        <Grow color="brand" size="xlarge" />
        <Text weight="bold" margin={{ top: '25px' }}>
          Urban Farmers
        </Text>
      </BoxDesc>
      <BoxDesc justify="center" align="center" margin="25px" direction="column">
        <BusinessService color="brand" size="xlarge" />
        <Text weight="bold" margin={{ top: '25px' }}>
          Local Businesses
        </Text>
      </BoxDesc>
    </Box>
  </Container>
);

export default ForWhom;
