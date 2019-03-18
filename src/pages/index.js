import React from 'react';
import Layout from '../layout';
import Section from '../shared-components/Section';
import Hero from '../components/Hero';
import ForWhom from '../components/ForWhom';
import Features from '../components/Features';
import JoinUs from '../components/JoinUs';
import Contact from '../components/Contact';
import {
  HeroSeparator,
  TopSeparator,
  BottomSeparator,
  FooterSeparator,
} from '../components/separator';
import theme from '../layout/theme';

const LandingPage = () => {
  const { colors } = theme.global;
  const accent1 = colors['accent-1'];
  const accent2 = colors['accent-2'];

  return (
    <React.Fragment>
      <Layout>
        <Section background="lightgray" pad="none">
          <Section
            pad={{ top: 'xlarge', bottom: 'large', horizontal: 'large' }}
          >
            <Hero
              title="Seeding the Future!"
              slogan="Connecting urban farmers and local businesses."
            />
          </Section>
          <HeroSeparator color="#fff" />
        </Section>
        <Section>
          <ForWhom />
        </Section>
        <TopSeparator color={accent1} />
        <Section
          background="accent-1"
          margin={{ top: '-6px' }}
          pad={{ top: 'large', bottom: 'xlarge', horizontal: 'large' }}
        >
          <Features />
        </Section>
        <Section
          background="accent-2"
          pad={{ top: 'xlarge', bottom: 'large', horizontal: 'large' }}
        >
          <JoinUs />
        </Section>
        <BottomSeparator color={accent2} />
        <Section pad={{ top: 'large', bottom: 'xlarge', horizontal: 'large' }}>
          <Contact email="sample@gmail.com" facebook="https://facebook.com" />
        </Section>
        <FooterSeparator color="lightgray" />
      </Layout>
    </React.Fragment>
  );
};
export default LandingPage;
