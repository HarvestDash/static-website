import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import 'normalize.css';
import 'typeface-inter';
import 'typeface-quicksand';

import theme from './theme';
import SEO from '../components/SEO';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SEO />
    <Global
      styles={currentTheme => ({
        body: {
          fontFamily: currentTheme.fonts.body,
          fontWeight: currentTheme.fontWeights.body,
          lineHeight: currentTheme.lineHeights.body,
        },
      })}
    />
    {children}
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
