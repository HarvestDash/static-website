import React from 'react';
import PropTypes from 'prop-types';
import { Box, Text, Image } from 'grommet';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Container from '../shared-components/Container';

const FeatureBox = ({ children }) => (
  <Box
    align="center"
    justify="center"
    margin={{ vertical: 'medium' }}
    pad="0.8em"
    margin="xsmall"
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

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 500, maxHeight: 500) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "agri1.jpg" }) {
          ...fluidImage
        }
        imageTwo: file(relativePath: { eq: "agri2.jpg" }) {
          ...fluidImage
        }
        imageThree: file(relativePath: { eq: "agri3.jpg" }) {
          ...fluidImage
        }
        imageFour: file(relativePath: { eq: "agri4.jpg" }) {
          ...fluidImage
        }
      }
    `}
    render={data => (
      <Container as="section" justify="center" align="center">
        <Text
          responsive
          textAlign="center"
          size="large"
          margin={{ bottom: 'small' }}
        >
          Farmgoat enables transparent selling and buying of agricultural
          products.
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
              <Img
                alt="Buy Local"
                fluid={data.imageOne.childImageSharp.fluid}
              />
            </Box>
            <Text margin={{ top: 'small' }}>Buy Local</Text>
          </FeatureBox>
          <FeatureBox>
            <Box
              height="small"
              width="small"
              border={{ side: 'all', size: 'xsmall', color: 'lightgray' }}
            >
              <Img
                alt="Capture More Value"
                fluid={data.imageTwo.childImageSharp.fluid}
              />
            </Box>
            <Text margin={{ top: 'small' }}>Capture More Value</Text>
          </FeatureBox>
          <FeatureBox>
            <Box
              height="small"
              width="small"
              border={{ side: 'all', size: 'xsmall', color: 'lightgray' }}
            >
              <Img
                alt="Keep it easy"
                fluid={data.imageThree.childImageSharp.fluid}
              />
            </Box>
            <Text margin={{ top: 'small' }}>Keep it easy</Text>
          </FeatureBox>
          <FeatureBox>
            <Box
              height="small"
              width="small"
              border={{ side: 'all', size: 'xsmall', color: 'lightgray' }}
            >
              <Img
                alt="100% Transparent"
                fluid={data.imageFour.childImageSharp.fluid}
              />
            </Box>
            <Text margin={{ top: 'small' }}>100% Transparent</Text>
          </FeatureBox>
        </Box>
      </Container>
    )}
  />
);
