import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function BreadcrumbItem(props) {
  const {
    active,
    children,
    className,
    ...other
  } = props;

  return (
    <li
      className={classnames('breadcrumb-item', {
        active,
      }, className)}
      {...other}
    >
      {children}
    </li>
  );
}

BreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

BreadcrumbItem.defaultProps = {
  active: false,
  className: '',
};
