import React from 'react';
import { Flex, Heading, Text } from 'rebass';
import Layout from '../layout';

const NotFoundPage = () => (
  <Layout>
    <Flex height="100%" flexDirection="column" justifyContent="center">
      <Heading as="h1" variant="display">
        NOT FOUND
      </Heading>
      <Text fontSize={[1, 2, 3]}>
        You just hit a route that doesn&#39;t exist... the sadness.
      </Text>
    </Flex>
  </Layout>
);

export default NotFoundPage;
