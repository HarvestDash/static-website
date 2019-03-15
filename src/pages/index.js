import React from 'react';
import Layout from '../layout';
import Section from '../shared-components/Section';
import Hero from '../components/Hero';
import ForWhom from '../components/ForWhom';
import Features from '../components/Features';
import JoinUs from '../components/JoinUs';
import Contact from '../components/Contact';

const LandingPage = () => (
  <React.Fragment>
    <Layout>
      <Section pad={{ vertical: 'xlarge', horizontal: 'large' }}>
        <Hero
          title="Seeding the Future!"
          slogan="Connecting urban farmers and local businesses."
        />
      </Section>
      <Section>
        <ForWhom />
      </Section>
      <Section>
        <Features />
      </Section>
      <Section>
        <JoinUs />
      </Section>
      <Section>
        <Contact />
      </Section>
    </Layout>
  </React.Fragment>
);

export default LandingPage;
