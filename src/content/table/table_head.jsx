import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function TableHead(props) {
  const {
    children,
    className,
    defaultType,
    inverse,
    ...other
  } = props;

  return (
    <thead
      className={classnames({
        'thead-default': defaultType,
        'thead-inverse': inverse,
      })}
      {...other}
    >
      {children}
    </thead>
  );
}

TableHead.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  defaultType: PropTypes.bool,
  inverse: PropTypes.bool,
};

TableHead.defaultProps = {
  className: '',
  defaultType: false,
  inverse: false,
};
