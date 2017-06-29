import React from 'react';
import PropTypes from 'prop-types';

import Heading from '../../content/heading';

export default function PopoverTitle(props) {
  const {
    children,
    className,
    ...other
  } = props;

  return (
    <Heading
      className={`popover-title ${className}`}
      size={3}
      {...other}
    >
      {children}
    </Heading>
  );
}

PopoverTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

PopoverTitle.defaultProps = {
  className: '',
};
