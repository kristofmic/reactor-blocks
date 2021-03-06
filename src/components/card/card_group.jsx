import React from 'react';
import PropTypes from 'prop-types';

import {
  CARD_TYPES,
} from '../../constants';

export default function CardGroup(props) {
  const {
    children,
    className,
    type,
    ...other
  } = props;

  return (
    <div
      className={`card-${type} ${className}`}
      role="group"
      {...other}
    >
      {children}
    </div>
  );
}

CardGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(CARD_TYPES),
};

CardGroup.defaultProps = {
  className: '',
  type: 'group',
};
