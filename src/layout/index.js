import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { Grommet } from 'grommet';

import 'normalize.css';
import 'typeface-inter';

import Theme from './theme';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            social {
              facebook
            }
          }
        }
      }
    `}
    render={data => {
      const { title, social } = data.site.siteMetadata;

      return (
        <Grommet theme={Theme}>
          <Header siteTitle={title} />
          {children}
          <Footer siteTitle={title} facebook={social.facebook} />
        </Grommet>
      );
    }}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
