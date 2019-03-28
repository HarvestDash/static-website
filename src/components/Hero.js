import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Box, Heading } from 'grommet';
import SignUpButtons from './SignUpButtons';
import Section from '../shared-components/Section';
import Container from '../shared-components/Container';
import { HeroSeparator } from './separator';

const HeroWrapper = styled(Box)`
  position: relative;

  & :before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #24292e;
    opacity: 0.35;
  }

  & > * {
    position: relative;

    & h1,
    h2,
    a {
      color: #fff;
    }
  }
`;

const BackgroundSection = ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "index/hero-img.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <BackgroundImage fluid={data.desktop.childImageSharp.fluid}>
        {children}
      </BackgroundImage>
    )}
  />
);

BackgroundSection.propTypes = {
  children: PropTypes.node.isRequired,
};

const Hero = ({ title, slogan }) => (
  <BackgroundSection>
    <HeroWrapper pad={{ top: 'xlarge' }}>
      <Section pad={{ top: 'xlarge', bottom: 'xlarge', horizontal: 'large' }}>
        <Container>
          <Heading level="1" margin="none">
            {title}
          </Heading>
          <Heading level="2">{slogan}</Heading>
          <Box direction="row" align="center" justify="start" wrap>
            <SignUpButtons position="left" />
          </Box>
        </Container>
      </Section>
      <Box width="full" margin={{ bottom: '-1px' }}>
        <HeroSeparator color="#fff" />
      </Box>
    </HeroWrapper>
  </BackgroundSection>
);

Hero.propTypes = {
  title: PropTypes.string,
  slogan: PropTypes.string,
};

Hero.defaultProps = {
  title: '',
  slogan: '',
};

export default Hero;
