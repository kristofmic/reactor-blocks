import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../dropdown';

import classnames from '../../utils/classnames';

export default function NavDropdown(props) {
  const {
    active,
    children,
    className,
    disabled,
    ...other
  } = props;

  return (
    <Dropdown
      className={classnames('nav-link', {
        active,
        disabled,
      }, className)}
      link
      {...other}
    >
      {children}
    </Dropdown>
  );
}

NavDropdown.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

NavDropdown.defaultProps = {
  active: false,
  className: '',
  disabled: false,
};
