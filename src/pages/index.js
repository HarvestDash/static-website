import React from 'react';
import Layout from '../layout';

import Hero from '../components/Hero';
import ForWhom from '../components/ForWhomSection';

const LandingPage = () => (
  <React.Fragment>
    <Layout>
      <Hero
        title="Making farming great again!"
        slogan="Connecting urban farmers and buyers."
      />
      <ForWhom />
    </Layout>
  </React.Fragment>
);

export default LandingPage;
