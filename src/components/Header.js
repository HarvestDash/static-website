import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Box, Text, ResponsiveContext } from 'grommet';
import Container from '../shared-components/Container';
import NavItems from './NavItems';

import FarmGoatLogo from '../images/logo/farmgoat-logo-flat.svg';

const FixedHeader = styled.header`
  position: fixed;
  right: 0;
  left: 0;
  padding: ${props => (props.isMobile ? '0.5em' : '1em')};
  transition: all 0.6s ease;
  z-index: 99;

  ${props =>
    props.pin
      ? `
      background-color: white;
      border-bottom: 1px solid lightgray;
      top: 0;
    `
      : `
      top: -100px;
    `}
  ${props =>
    props.top &&
    `
      color: #fff;
      background-color: transparent;
      border-bottom: none;
      top: 0;
    `};
`;

const ImgLogo = styled.img`
  width: ${props => (props.isMobile || !props.top ? '40px' : '45px')};
  height: ${props => (props.isMobile || !props.top ? '40px' : '45px')};
  transition: all 0.3s ease;
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
  margin: 0;
  display: flex;
  flex-direction: row;
  justify-content: ${props => (props.isMobile ? 'space-around' : 'center')};
  align-items: center;
  width: 100%;

  & li {
    margin-left: ${props => (props.isMobile ? '0' : '1.5em')};
    width: ${props => (props.isMobile ? '100%' : 'auto')};
  }
`;

const BottomNav = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #fff;
  border-top: 1px solid lightgray;
  z-index: 99;
`;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isPin: false,
      isOnTop: true,
    };
    this.lastScrollPosition = 0;

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition === 0) {
      this.setState({ isOnTop: true });
    } else {
      this.setState({ isOnTop: false });
    }

    // if user scroll up pin the header
    if (this.lastScrollPosition > currentScrollPosition) {
      this.setState({ isPin: true });
    } else {
      this.setState({ isPin: false });
    }

    this.lastScrollPosition = currentScrollPosition;
  }

  render() {
    const { siteTitle } = this.props;
    const { isPin, isOnTop } = this.state;

    return (
      <ResponsiveContext.Consumer>
        {size => (
          <React.Fragment>
            <FixedHeader pin={isPin} top={isOnTop} isMobile={size === 'small'}>
              <Container
                direction="row"
                justify="between"
                align="center"
                margin={{ horizontal: 'auto' }}
              >
                <LogoLink to="/">
                  <ImgLogo
                    src={FarmGoatLogo}
                    alt={siteTitle}
                    top={isOnTop}
                    isMobile={size === 'small'}
                  />
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
                    <NavItems isMobile />
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
