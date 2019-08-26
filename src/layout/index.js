import React from 'react';
import PropTypes from 'prop-types';
import { Global, css } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import 'normalize.css';
import 'typeface-inter';

import theme from './theme';
import SEO from '../components/SEO';

const globalStyles = css`
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    font-weight: 400;
    line-height: 1.5;
  }
`;

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SEO />
    <Global styles={globalStyles} />
    {children}
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
