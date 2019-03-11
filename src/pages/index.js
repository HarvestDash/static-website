import React from 'react';
import Layout from '../layout';

import Hero from '../components/Hero';
import ForWhom from '../components/ForWhomSection';
import Features from '../components/Features';
import JoinUs from '../components/JoinUs';

const LandingPage = () => (
  <React.Fragment>
    <Layout>
      <Hero
        title="Seeding the Future!"
        slogan="Connecting urban farmers and local businesses."
      />
      <ForWhom />
      <Features />
      <JoinUs />
    </Layout>
  </React.Fragment>
);

export default LandingPage;
