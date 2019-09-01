import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex, Text } from 'rebass';
import Logo from '../images/HarvestDash-Logo-White.svg';
import FbLogo from '../images/facebook.svg';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      site {
        siteMetadata {
          title
          social {
            facebook
          }
        }
      }
    }
  `);

  const { title, social } = data.site.siteMetadata;

  return (
    <Box as="footer" bg="secondary">
      <Flex
        px={4}
        py={[3, 4]}
        variant="container"
        alignItems="flex-start"
        flexDirection={['column', 'row']}
      >
        <Flex alignItems="center">
          <Box mr={3} width={['40px', '50px']} height="auto">
            <Logo css={{ width: '100%', height: 'auto' }} />
          </Box>
          <Text fontFamily="brand" fontWeight="bold" fontSize={[3, 4]}>
            {title}
          </Text>
        </Flex>
        <Flex
          flex={1}
          flexDirection="column"
          alignItems={['flex-start', 'flex-end']}
          mt={[4, 0]}
        >
          <Flex
            as="a"
            href={social.facebook}
            p={2}
            mb={4}
            sx={{
              backgroundColor: 'rgba(0, 77, 64, 0.5)',
              borderRadius: '50%',
            }}
            aria-label="facebook"
          >
            <FbLogo />
          </Flex>
          <Text>&copy; 2019 {title}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
