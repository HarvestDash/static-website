import React from 'react';
import Layout from '../layout';

import Hero from '../components/Hero';
import ForWhom from '../components/ForWhom';
import Features from '../components/Features';
import JoinUs from '../components/JoinUs';
import Contact from '../components/Contact';

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
      <Contact />
    </Layout>
  </React.Fragment>
);

export default LandingPage;
