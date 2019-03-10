import React from 'react';
import Layout from '../layout';

import Hero from '../components/Hero';
import ForWhom from '../components/ForWhomSection';

const LandingPage = () => (
  <React.Fragment>
    <Layout>
      <Hero
        title="Seeding the Future!"
        slogan="Connecting urban farmers and local businesses."
      />
      <ForWhom />
    </Layout>
  </React.Fragment>
);

export default LandingPage;
