import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Box, Heading } from 'grommet';
import SignUpButtons from './SignUpButtons';
import Section from '../shared-components/Section';
import Container from '../shared-components/Container';
import { HeroSeparator } from './separator';

import HeroImage from '../images/index/hero-bg-img.jpg';

const HeroWrapper = styled(Box)`
  position: relative;
  background-color: #8f8f8f;
  background-image: url(${HeroImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

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

const Hero = ({ title, slogan }) => (
  <HeroWrapper pad={{ top: 'xlarge' }}>
    <Section pad={{ top: 'xlarge', bottom: 'large', horizontal: 'large' }}>
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
