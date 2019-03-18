import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Image } from 'grommet';
import Container from '../shared-components/Container';
import FeatureImage1 from '../images/index/agri1.jpg';
import FeatureImage2 from '../images/index/agri2.jpg';
import FeatureImage3 from '../images/index/agri3.jpg';
import FeatureImage4 from '../images/index/agri4.jpg';

const FeatureBox = ({ children }) => (
  <Box
    align="center"
    justify="center"
    margin={{ vertical: 'medium' }}
    pad="0.8em"
    background="white"
    elevation="large"
    round="xsmall"
  >
    {children}
  </Box>
);

FeatureBox.propTypes = {
  children: PropTypes.node.isRequired,
};

const Features = () => (
  <Container as="section" justify="center" align="center">
    <Text
      responsive
      textAlign="center"
      size="large"
      margin={{ bottom: 'small' }}
    >
      Farmgoat enables transparent selling and buying of agricultural products.
    </Text>
    <Text
      responsive
      textAlign="center"
      size="large"
      margin={{ bottom: 'medium' }}
    >
      Sell directly to local businesses and buy directly from urban farmers.
    </Text>
    <Box
      width="full"
      justify="around"
      align="center"
      direction="row"
      margin={{ top: 'small' }}
      wrap
    >
      <FeatureBox>
        <Box
          height="small"
          width="small"
          border={{ side: 'all', size: 'xsmall', color: 'lightgray' }}
        >
          <Image fit="cover" src={FeatureImage1} />
        </Box>
        <Text margin={{ top: 'small' }}>Buy Local</Text>
      </FeatureBox>
      <FeatureBox>
        <Box
          height="small"
          width="small"
          border={{ side: 'all', size: 'xsmall', color: 'lightgray' }}
        >
          <Image fit="cover" src={FeatureImage2} />
        </Box>
        <Text margin={{ top: 'small' }}>Capture More Value</Text>
      </FeatureBox>
      <FeatureBox>
        <Box
          height="small"
          width="small"
          border={{ side: 'all', size: 'xsmall', color: 'lightgray' }}
        >
          <Image fit="cover" src={FeatureImage3} />
        </Box>
        <Text margin={{ top: 'small' }}>Keep it easy</Text>
      </FeatureBox>
      <FeatureBox>
        <Box
          height="small"
          width="small"
          border={{ side: 'all', size: 'xsmall', color: 'lightgray' }}
        >
          <Image fit="cover" src={FeatureImage4} />
        </Box>
        <Text margin={{ top: 'small' }}>100% Transparent</Text>
      </FeatureBox>
    </Box>
  </Container>
);

export default Features;
