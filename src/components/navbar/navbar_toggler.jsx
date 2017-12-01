import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import {
  HORIZONTAL_POSITION,
} from '../../constants';

export default function NavbarToggler(props) {
  const {
    active,
    children,
    className,
    horizontalPosition,
    onClick,
    ...other
  } = props;

  return (
    <button
      className={classnames(`navbar-toggler navbar-toggler-${horizontalPosition}`, {
        active,
      }, className)}
      onClick={onClick}
      type="button"
      {...other}
    >
      <span className="navbar-toggler-icon">
        <div className="navbar-toggler-icon-bar" />
        <div className="navbar-toggler-icon-bar" />
        <div className="navbar-toggler-icon-bar" />
      </span>
    </button>
  );
}

NavbarToggler.displayName = 'NavbarToggler';

NavbarToggler.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  horizontalPosition: PropTypes.oneOf(HORIZONTAL_POSITION),
  onClick: PropTypes.func,
};

NavbarToggler.defaultProps = {
  active: false,
  className: '',
  horizontalPosition: 'right',
};
