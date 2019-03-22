import React from 'react';
import PropTypes from 'prop-types';
import { Button, ResponsiveContext } from 'grommet';

const SignUpButtons = ({ position }) => (
  <ResponsiveContext.Consumer>
    {size => (
      <React.Fragment>
        <Button
          primary
          href="https://form.responster.com/ukgxQr"
          label="Sign Up as a Farmer"
          margin={{
            vertical: 'small',
            ...(size !== 'small'
              ? {
                  ...(position === 'left' ? { right: 'medium' } : null),
                  ...(position === 'center' ? { horizontal: 'small' } : null),
                }
              : {
                  horizontal: 'auto',
                }),
          }}
        />
        <Button
          href="https://form.responster.com/IQy9YS"
          label="Sign Up as a Local Business"
          margin={{
            vertical: 'small',
            ...(size !== 'small'
              ? {
                  ...(position === 'center' ? { horizontal: 'small' } : null),
                }
              : {
                  horizontal: 'auto',
                }),
          }}
          responsive={size === 'small'}
        />
      </React.Fragment>
    )}
  </ResponsiveContext.Consumer>
);

SignUpButtons.propTypes = {
  position: PropTypes.string,
};

SignUpButtons.defaultProps = {
  position: '',
};

export default SignUpButtons;
