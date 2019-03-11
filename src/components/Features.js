import React from 'react';
import { Box, Text, Image } from 'grommet';
import styled from 'styled-components';
import Container from '../shared-components/Container';
import FeatureImage1 from '../images/index/agri1.jpg';
import FeatureImage2 from '../images/index/agri2.jpg';
import FeatureImage3 from '../images/index/agri3.jpg';
import FeatureImage4 from '../images/index/agri4.jpg';

const FeatureBox = styled(Box)`
  margin: 20px;
  justify-content: center;
  text-align: center;
  padding: 10px;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.46);
  border-radius: 5px;
`;

const Features = () => (
  <Box as="section" justify="center" align="center">
    <Text
      responsive
      textAlign="center"
      size="medium"
      weight="bold"
      margin="10px"
    >
      Farmgoat enables transparent selling and buying of agricultural products.
      <br />
      Sell directly to local businesses and buy directly from urban farmers.
    </Text>
    <Container
      justify="center"
      align="center"
      direction="row"
      margin={{ top: '20px' }}
      wrap="no-wrap"
    >
      <FeatureBox>
        <Box height="small" width="small" alignSelf="center">
          <Image fit="cover" src={FeatureImage1} />
        </Box>
        <Text margin={{ top: '10px' }}>Buy Local</Text>
      </FeatureBox>
      <FeatureBox>
        <Box height="small" width="small" alignSelf="center">
          <Image fit="cover" src={FeatureImage2} />
        </Box>
        <Text margin={{ top: '10px' }}>Capture More Value</Text>
      </FeatureBox>
      <FeatureBox>
        <Box height="small" width="small" alignSelf="center">
          <Image fit="cover" src={FeatureImage3} />
        </Box>
        <Text margin={{ top: '10px' }}>Keep it easy</Text>
      </FeatureBox>
      <FeatureBox>
        <Box height="small" width="small" alignSelf="center">
          <Image fit="cover" src={FeatureImage4} />
        </Box>
        <Text margin={{ top: '10px' }}>100% Transparent</Text>
      </FeatureBox>
    </Container>
  </Box>
);

export default Features;
