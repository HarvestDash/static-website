import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'grommet';

const SignUpButtons = ({ position }) => (
  <React.Fragment>
    <Button
      primary
      href="https://form.responster.com/ukgxQr"
      label="Sign Up as a Farmer"
      margin={{
        vertical: 'small',
        ...(position === 'left' ? { right: 'medium' } : null),
        ...(position === 'center' ? { horizontal: 'small' } : null),
      }}
    />
    <Button
      href="https://form.responster.com/IQy9YS"
      label="Sign Up as a Local Business"
      margin={{
        vertical: 'small',
        ...(position === 'center' ? { horizontal: 'small' } : null),
      }}
    />
  </React.Fragment>
);

SignUpButtons.propTypes = {
  position: PropTypes.string,
};

SignUpButtons.defaultProps = {
  position: '',
};

export default SignUpButtons;
