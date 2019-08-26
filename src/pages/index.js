import React from 'react';
import { Button, Flex, Heading } from 'rebass';
import Layout from '../layout';

const LandingPage = () => (
  <Layout>
    <Flex height="100%" flexDirection="column" justifyContent="center">
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
          Sell Harvest &#8594;
        </Button>

        <Button
          variant="outline"
          fontSize={[2, 3, 4]}
          ml={[0, 2]}
          mt={[2, 0]}
          px={[4, 3]}
        >
          Buy Harvest &#8594;
        </Button>
      </Flex>
    </Flex>
  </Layout>
);

export default LandingPage;
