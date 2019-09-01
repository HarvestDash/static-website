import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex, Image, Text } from 'rebass';
import logo from '../images/HarvestDash-Logo-White.svg';
import fbLogo from '../images/facebook.svg';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

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
          <Image
            src={logo}
            alt="HarvestDash logo"
            mr={3}
            width={['40px', '50px']}
            height="auto"
          />
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
            p={2}
            mb={4}
            sx={{
              backgroundColor: 'rgba(0, 77, 64, 0.5)',
              borderRadius: '50%',
            }}
          >
            <Image src={fbLogo} alt="Facebook logo" />
          </Flex>
          <Text>&copy; 2019 {title}</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
