import React from 'react';
import { Box, Heading, Grid } from 'grommet';
import styled from 'styled-components';
import Container from '../shared-components/Container';

const BoxDesc = styled.div`
  width: 300px;
  height: 300px;
  justify-content: center;
  align-items: center;
  display: flex;
  background: grey;
  margin: 25px;
  `;

const ForWhom = () => (
  <Box as="section" justify="center" align="center">
    <Container  justify="center" align="center">
      <Heading level="2">FarmGoat is for</Heading>
    </Container>
    <Container justify="center" align="center" direction="row" wrap>
      <BoxDesc>
        Urban Farmers
      </BoxDesc>
      <BoxDesc>
        Local Businesses
      </BoxDesc>
    </Container>
  </Box>
);

export default ForWhom;
