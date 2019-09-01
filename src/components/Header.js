import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex, Text } from 'rebass';
import logo from '../images/HarvestDash-Logo-White.svg';

const Header = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const { title } = data.site.siteMetadata;

  return (
    <Flex as="header" px={4} py={3} alignItems="center">
      <Box
        as="img"
        src={logo}
        alt="HarvestDash logo"
        mr={3}
        sx={{ width: '50px', height: 'auto' }}
      />
      <Text fontFamily="brand" fontWeight="bold" fontSize={4}>
        {title}
      </Text>
    </Flex>
  );
};

export default Header;
