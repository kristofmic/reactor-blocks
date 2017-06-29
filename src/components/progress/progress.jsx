import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

import {
  PROGRESS_BAR_CONTEXT_TYPES,
} from '../../constants';

export default function Progress(props) {
  const {
    animated,
    className,
    label,
    striped,
    type,
    value,
    ...other
  } = props;

  return (
    <div className={`progress ${className}`} {...other}>
      <div
        className={classnames('progress-bar', {
          'progress-bar-animated': animated,
          'progress-bar-striped': animated || striped,
          [`bg-${type}`]: type,
        })}
        role="progressbar"
        style={{
          width: `${value}%`,
        }}
      >
        {label && (
          `${value}%`
        )}
      </div>
    </div>
  );
}

Progress.propTypes = {
  animated: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.bool,
  striped: PropTypes.bool,
  type: PropTypes.oneOf(PROGRESS_BAR_CONTEXT_TYPES),
  value: PropTypes.number,
};

Progress.defaultProps = {
  animated: false,
  className: '',
  label: false,
  striped: false,
  value: 0,
};
