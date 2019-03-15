import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text } from 'grommet';
import Section from '../shared-components/Section';
import Container from '../shared-components/Container';

import FarmGoatLogo from '../images/logo/farmgoat-logo-flat.svg';

const ImgLogo = styled.img`
  width: 40px;
  height: 40px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-decoration: none;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;

  & li {
    display: inline;
    margin-left: 1em;
  }
`;

const Header = ({ siteTitle }) => (
  <Section as="header" pad="small">
    <Container direction="row" justify="between" align="center">
      <LogoLink to="/">
        <ImgLogo src={FarmGoatLogo} alt={siteTitle} />
        <Text size="large" weight="bold" margin={{ left: '0.75em' }}>
          {siteTitle}
        </Text>
      </LogoLink>

      <nav role="navigation">
        <NavList>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </NavList>
      </nav>
    </Container>
  </Section>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
