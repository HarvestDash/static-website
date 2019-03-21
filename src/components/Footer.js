import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, ResponsiveContext, Text } from 'grommet';
import { Facebook } from 'grommet-icons';
import Section from '../shared-components/Section';
import Container from '../shared-components/Container';

const Footer = ({ siteTitle, facebook }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <Section
        as="footer"
        background="lightgray"
        pad={{
          top: 'medium',
          bottom: size !== 'small' ? 'large' : '6em',
          horizontal: 'large',
        }}
      >
        <Container>
          <Box
            direction="row"
            align="center"
            justify="center"
            pad={{ bottom: 'large' }}
          >
            <Text color="text-gray">Like us on:</Text>
            <Button
              icon={<Facebook color="#3b5998" />}
              href={facebook}
              target="_blank"
              rel="noopener noreferrer"
            />
          </Box>
          <Box
            direction={size === 'small' ? 'column' : 'row'}
            align="center"
            justify="between"
          >
            <Text
              size="small"
              color="text-gray"
              margin={size === 'small' ? { bottom: 'small' } : null}
            >
              Terms of Service | Privacy Policy
            </Text>
            <Text size="small" color="text-gray">
              &copy; {siteTitle} {new Date().getFullYear().toString()}
            </Text>
          </Box>
        </Container>
      </Section>
    )}
  </ResponsiveContext.Consumer>
);

Footer.propTypes = {
  siteTitle: PropTypes.string,
  facebook: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  siteTitle: ``,
};

export default Footer;
