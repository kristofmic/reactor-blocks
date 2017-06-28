import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from '../../content/list';

export default function NavItem(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <ListItem className={`nav-item ${className}`} {...other}>
      {children}
    </ListItem>
  );
}

NavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

NavItem.defaultProps = {
  className: '',
};
