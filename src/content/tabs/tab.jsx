import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

export default function Tab(props) {
  const {
    active,
    children,
    className,
    fade,
    show,
    value,
    ...other
  } = props;

  return (
    <div
      className={classnames('tab-pane', {
        active,
        fade,
        show,
      }, className)}
      {...other}
    >
      {children}
    </div>
  );
}

Tab.displayName = 'Tab';

Tab.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  fade: PropTypes.bool,
  show: PropTypes.bool,
  value: PropTypes.any,
};

Tab.defaultProps = {
  active: false,
  className: '',
  fade: false,
  show: false,
};
