import React from 'react';
import PropTypes from 'prop-types';

export default function Dismiss(props) {
  const {
    className,
    onClick,
    ...other
  } = props;

  return (
    <button
      className={`close ${className}`}
      onClick={onClick}
      type="button"
      {...other}
    >
      <i className="fa fa-times" />
    </button>
  );
}

Dismiss.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Dismiss.defaultProps = {
  className: '',
};
