import React from 'react';
import PropTypes from 'prop-types';

import Link from '../../content/link';

import classnames from '../../utils/classnames';

export default function CardLink(props) {
  const {
    children,
    className,
    disabled,
    ...other
  } = props;

  return (
    <Link
      className={classnames('card-link', {
        disabled,
      }, className)}
      {...other}
    >
      {children}
    </Link>
  );
}

CardLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

CardLink.defaultProps = {
  className: '',
  disabled: false,
};
