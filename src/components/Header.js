import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Box, Text, ResponsiveContext, Button } from 'grommet';
import { Link as ScrollTo } from 'react-scroll';
import Container from '../shared-components/Container';

import FarmGoatLogo from '../images/logo/farmgoat-logo-flat.svg';

const FixedHeader = styled.header`
  ${props =>
    props.pin && !props.mobile
      ? `
        position: fixed;
        background-color: white;
        border-bottom: 1px solid lightgray;
        padding: 0.3em 0.5em;  
        `
      : `
        position: absolute;
        background-color: transparent;
        border-bottom: none;
        padding: 0.5em;
  `}
  top: 0;
  right: 0;
  left: 0;
  transition: all 0.3s ease;
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
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & li {
    margin: ${props => (props.isMobile ? '0 1em' : '0 0 0 1em')};
  }
`;

const BottomNav = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  border-top: 1px solid lightgray;
`;

const NavItems = () => {
  const navItems = [
    {
      name: 'About',
      path: 'about',
    },
    {
      name: 'Join Us',
      path: 'join',
    },
    {
      name: 'Contact',
      path: 'contact',
    },
  ];

  return navItems.map(nav => (
    <li key={nav.path}>
      <ScrollTo to={nav.path} smooth offset={-50} duration={500}>
        <Button plain hoverIndicator={{ background: false }} label={nav.name} />
      </ScrollTo>
    </li>
  ));
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPin: false,
    };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 0) {
      this.setState({ isPin: true });
    } else {
      this.setState({ isPin: false });
    }
  }

  render() {
    const { siteTitle } = this.props;
    const { isPin } = this.state;

    return (
      <ResponsiveContext.Consumer>
        {size => (
          <React.Fragment>
            <FixedHeader pin={isPin} mobile={size === 'small'}>
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

                {size !== 'small' && (
                  <nav role="navigation">
                    <NavList>
                      <NavItems />
                    </NavList>
                  </nav>
                )}
              </Container>
            </FixedHeader>

            {size === 'small' && (
              <BottomNav>
                <Box as="nav" role="navigation" align="center" justify="start">
                  <NavList isMobile>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                  </NavList>
                </Box>
              </BottomNav>
            )}
          </React.Fragment>
        )}
      </ResponsiveContext.Consumer>
    );
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
