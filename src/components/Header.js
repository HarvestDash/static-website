import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Text } from 'rebass';

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
    <Box as="header" variant="container" mx="auto" p={3}>
      <Text fontFamily="brand" fontWeight="bold" fontSize={4}>
        {title}
      </Text>
    </Box>
  );
};

export default Header;
