import React from 'react';
import PropTypes from 'prop-types';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';

import 'normalize.css';
import 'typeface-inter';
import 'typeface-quicksand';

import theme from './theme';
import SEO from '../components/SEO';
import Header from '../components/Header';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <SEO />
    <Global
      styles={({ fonts, fontWeights, lineHeights, colors }) => ({
        body: {
          fontFamily: fonts.body,
          fontWeight: fontWeights.body,
          lineHeight: lineHeights.body,
          color: colors.text,
          backgroundColor: colors.background,
        },
      })}
    />
    <Header />
    {children}
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
