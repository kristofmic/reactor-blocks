import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../content/link';

import classnames from '../../utils/classnames';

export default function NavLink(props) {
  const {
    active,
    children,
    className,
    disabled,
    ...other
  } = props;

  return (
    <Link
      className={classnames('nav-link', {
        active,
        disabled,
      }, className)}
      {...other}
    >
      {children}
    </Link>
  );
}

NavLink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

NavLink.defaultProps = {
  active: false,
  className: '',
  disabled: false,
};
