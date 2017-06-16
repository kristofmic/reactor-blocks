import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

// NOTE: the primary purpose of this is to provide an entity with a position: relative;
// so that the menu can be positioned correctly.
// NOTE: adding the "show" class will display the contained DropdownMenu, however it is preferred
// to add the show class directly to the menu to achieve the effect.
// NOTE: adding the "dropup" class will make the menu drop up versus down, however it is preferred
// to add the "dropup" class directly to the DropdownMenu to achieve the effect.
export default function DropdownWrapper(props) {
  const {
    children,
    className,
    show,
    up,
    ...other
  } = props;

  return (
    <div
      className={classnames('dropdown', {
        dropup: up,
        show,
      }, className)}
      {...other}
    >
      {children}
    </div>
  );
}

DropdownWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  show: PropTypes.bool,
  up: PropTypes.bool,
};

DropdownWrapper.defaultProps = {
  className: '',
  show: false,
  up: false,
};
