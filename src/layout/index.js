import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Grommet } from 'grommet';

import 'normalize.css';
import 'typeface-inter';

import Header from '../components/header';
import Theme from './theme';
import '../components/layout.css';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Grommet theme={Theme}>
        <Header siteTitle={data.site.siteMetadata.title} />
        {children}
      </Grommet>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
