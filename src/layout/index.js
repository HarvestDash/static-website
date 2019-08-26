import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'emotion-theming';

import 'normalize.css';
import 'typeface-inter';

import theme from './theme';
import SEO from '../components/SEO';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SEO />
    {children}
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
