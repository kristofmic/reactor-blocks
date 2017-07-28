import React from 'react';
import PropTypes from 'prop-types';

import * as CLASSES from '../../utils/classes';

import {
  LOADING_CONTEXT_TYPES,
  SIZES,
} from '../../constants';

export default function Loading(props) {
  const {
    className,
    size,
    text,
    type,
    ...other
  } = props;

  return (
    <div className={`loading loading-${size} loading-${type} ${className}`} {...other}>
      <div className="loading-icon" />
      {text && (
        <p className={`loading-text ${CLASSES.MARGIN.Y_0}`}>{text}</p>
      )}
    </div>
  );
}

Loading.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(SIZES),
  text: PropTypes.string,
  type: PropTypes.oneOf(LOADING_CONTEXT_TYPES),
};

Loading.defaultProps = {
  className: '',
  size: 'md',
  type: 'primary',
};
