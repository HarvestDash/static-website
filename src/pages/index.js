import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { Box } from 'grommet';
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

const LandingPage = ({ data }) => {
  const { colors } = theme.global;
  const accent1 = colors['accent-1'];
  const accent2 = colors['accent-2'];

  const { email, social } = data.site.siteMetadata;

  return (
    <React.Fragment>
      <Layout>
        <Section background="lightgray" pad={{ top: 'xlarge' }}>
          <Section
            pad={{ top: 'xlarge', bottom: 'large', horizontal: 'large' }}
          >
            <Hero
              title="Seeding the Future!"
              slogan="Connecting urban farmers and local businesses."
            />
          </Section>
          <Box width="full" margin={{ bottom: '-1px' }}>
            <HeroSeparator color="#fff" />
          </Box>
        </Section>
        <Section id="about" background="white">
          <ForWhom />
        </Section>
        <Box width="full" margin={{ bottom: '-1px' }}>
          <TopSeparator color={accent1} />
        </Box>
        <Section
          background="accent-1"
          pad={{ vertical: 'xlarge', horizontal: 'large' }}
        >
          <Features />
        </Section>
        <Section
          id="join"
          background="accent-2"
          pad={{ top: 'large', bottom: 'xlarge', horizontal: 'large' }}
        >
          <JoinUs />
        </Section>
        <Box width="full" margin={{ top: '-1px' }}>
          <BottomSeparator color={accent2} />
        </Box>
        <Section
          id="contact"
          pad={{ top: 'large', bottom: 'xlarge', horizontal: 'large' }}
        >
          <Contact email={email} facebook={social.messenger} />
        </Section>
        <Box width="full" margin={{ bottom: '-1px' }}>
          <FooterSeparator color="lightgray" />
        </Box>
      </Layout>
    </React.Fragment>
  );
};

LandingPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default LandingPage;

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        email
        social {
          messenger
        }
      }
    }
  }
`;
