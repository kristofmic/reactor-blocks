import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function Container(props) {
  const {
    children,
    className,
    fluid,
    ...other
  } = props;
  const classNameProp = classnames({ container: !fluid, 'container-fluid': fluid });

  return (
    <div
      className={`${classNameProp} ${className}`}
      {...other}
    >
      {children}
    </div>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool,
};

Container.defaultProps = {
  className: '',
  fluid: false,
};
