import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Text } from 'grommet';
import Container from '../shared-components/Container';

import FarmGoatLogo from '../images/logo/farmgoat-logo-flat.svg';

const FixedHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0.5em;
`;

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
  <FixedHeader>
    <Container
      direction="row"
      justify="between"
      align="center"
      margin={{ horizontal: 'auto' }}
    >
      <LogoLink to="/">
        <ImgLogo src={FarmGoatLogo} alt={siteTitle} />
        <Text
          color="brand"
          size="large"
          weight="bold"
          margin={{ left: '0.75em' }}
        >
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
  </FixedHeader>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
