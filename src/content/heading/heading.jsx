import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function Heading(props) {
  const {
    children,
    className,
    display,
    size,
    ...other
  } = props;

  const HTag = `h${size}`;

  return (
    <HTag
      className={classnames({
        [`display-${display}`]: display,
      }, className)}
      {...other}
    >
      {children}
    </HTag>
  );
}

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  display: PropTypes.oneOf([1, '1', 2, '2', 3, '3', 4, '4']),
  size: PropTypes.oneOf([1, '1', 2, '2', 3, '3', 4, '4', 5, '5', 6, '6']).isRequired,
};

Heading.defaultProps = {
  className: '',
  display: false,
};
