import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import {
  CARD_CONTEXT_TYPES,
} from '../../constants';

export default function Card(props) {
  const {
    border,
    children,
    className,
    type,
    ...other
  } = props;

  return (
    <div
      className={classnames('card', {
        [`card-${type}`]: type && !border,
        [`border-${type}`]: type && border,
      }, className)}
      {...other}
    >
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  inverse: PropTypes.bool,
  border: PropTypes.bool,
  type: PropTypes.oneOf(CARD_CONTEXT_TYPES),
};

Card.defaultProps = {
  className: '',
  border: false,
};
