import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Box, Button, Flex, Heading, Link, Text } from 'rebass';
import Layout from '../layout';
import Logo from '../images/HarvestDash-Logo-White.svg';
import ArrowRight from '../images/arrow-right.svg';

const SELL_SIGNUP_URL = 'https://form.responster.com/ukgxQr';
const BUY_SIGNUP_URL = 'https://form.responster.com/IQy9YS';

const LandingPage = ({ data }) => {
  const { site, file } = data;

  return (
    <Layout>
      <Flex
        alignItems="center"
        justifyContent="center"
        height="100%"
        sx={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='288' height='288' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%231c6055' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%231c6055'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")
          /* background by SVGBackgrounds.com */`,
        }}
      >
        <Flex
          width="100%"
          height="100%"
          alignItems="center"
          justifyContent="center"
          px={4}
          py={3}
          variant="container"
        >
          <Box width={['100%', '60%']}>
            <Box
              mx="auto"
              mb={3}
              width="100px"
              height="auto"
              sx={{ display: ['block', 'none'] }}
            >
              <Logo css={{ width: '100%', height: 'auto' }} />
            </Box>
            <Heading
              as="h1"
              fontSize={[5, 6, 7]}
              fontFamily="brand"
              textAlign={['center', 'left']}
            >
              {site.siteMetadata.title}
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
            <Img fluid={file.childImageSharp.fluid} alt="farmer" />
          </Box>
        </Flex>
      </Flex>
    </Layout>
  );
};

LandingPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
};

export const query = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }

    file(relativePath: { eq: "farmer.png" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default LandingPage;
