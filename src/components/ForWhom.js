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
  <Box as="section" justify="center" align="center">
    <Heading level="2">FarmGoat is for</Heading>
    <Container justify="center" align="center" direction="row" wrap>
      <BoxDesc justify="center" align="center" margin="25px" direction="column">
        <Grow color="#F1C410" size="xlarge" />
        <Text weight="bold" margin={{ top: '25px' }}>
          Urban Farmers
        </Text>
      </BoxDesc>
      <BoxDesc justify="center" align="center" margin="25px" direction="column">
        <BusinessService color="#F1C410" size="xlarge" />
        <Text weight="bold" margin={{ top: '25px' }}>
          Local Businesses
        </Text>
      </BoxDesc>
    </Container>
  </Box>
);

export default ForWhom;
