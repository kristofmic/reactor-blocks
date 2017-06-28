import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../content/link';
import { ListItem } from '../../content/list';

export default function PageItem(props) {
  const {
    children,
    className,
    href,
    onClick,
    ...other
  } = props;

  return (
    <ListItem className={`page-item ${className}`} {...other}>
      <Link
        className="page-link"
        href={href}
        onClick={onClick}
      >
        {children}
      </Link>
    </ListItem>
  );
}

PageItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

PageItem.defaultProps = {
  className: '',
};
