import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import {
  CARD_CONTEXT_TYPES,
} from '../../constants';

export default function Card(props) {
  const {
    children,
    className,
    inverse,
    outline,
    type,
    ...other
  } = props;

  return (
    <div
      className={classnames('card', {
        'card-inverse': inverse || (type && !outline),
        [`card-${type}`]: type && !outline,
        [`card-outline-${type}`]: type && outline,
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
  outline: PropTypes.bool,
  type: PropTypes.oneOf(CARD_CONTEXT_TYPES),
};

Card.defaultProps = {
  className: '',
  inverse: false,
  outline: false,
};
