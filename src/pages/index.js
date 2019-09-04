import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Button, Flex, Heading, Link, Text } from 'rebass';
import Layout from '../layout';
import ArrowRight from '../images/arrow-right.svg';

const SELL_SIGNUP_URL = 'https://form.responster.com/ukgxQr';
const BUY_SIGNUP_URL = 'https://form.responster.com/IQy9YS';

const LandingPage = () => {
  const image = useStaticQuery(
    graphql`
      {
        file(relativePath: { eq: "farmer.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `
  );

  return (
    <Layout>
      <Flex height="100%" alignItems="center" justifyContent="center">
        <Box width={['100%', '60%']}>
          <Heading
            as="h1"
            fontSize={[5, 6, 7]}
            fontFamily="brand"
            textAlign={['center', 'left']}
          >
            HarvestDash
          </Heading>
          <Heading
            as="h2"
            fontSize={[3, 4, 5]}
            fontWeight="body"
            mt={3}
            mb={[4, 5]}
            textAlign={['center', 'left']}
          >
            Secure Tomorrow’s Harvest Today
          </Heading>
          <Flex flexDirection={['column', 'row']} alignItems="center">
            <Button
              variant="primary"
              fontSize={[2, 3, 4]}
              mr={[0, 2]}
              mb={[2, 0]}
              px={[4, 3]}
            >
              <Link
                href={SELL_SIGNUP_URL}
                sx={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Text mr={2}>Sell Harvest</Text>
                <ArrowRight />
              </Link>
            </Button>

            <Button
              variant="outline"
              fontSize={[2, 3, 4]}
              ml={[0, 2]}
              mt={[2, 0]}
              px={[4, 3]}
            >
              <Link
                href={BUY_SIGNUP_URL}
                sx={{
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Text mr={2}>Buy Harvest</Text>
                <ArrowRight />
              </Link>
            </Button>
          </Flex>
        </Box>
        <Box sx={{ display: ['none', 'block'] }} width={['100%', '40%']}>
          <Img fluid={image.file.childImageSharp.fluid} alt="farmer" />
        </Box>
      </Flex>
    </Layout>
  );
};

export default LandingPage;
