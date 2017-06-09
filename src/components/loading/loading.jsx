import React from 'react';
import PropTypes from 'prop-types';

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
        <p className="loading-text my-0">{text}</p>
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
