import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';

// NOTE: the primary purpose of this is to provide an entity with a position: relative;
// so that the menu can be positioned correctly.
// NOTE: adding the "show" class will display the contained DropdownMenu, however it is preferred
// to add the show class directly to the menu to achieve the effect.
export default function DropdownWrapper(props) {
  const {
    children,
    className,
    show,
    ...other
  } = props;

  return (
    <div
      className={classnames('dropdown', {
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
};

DropdownWrapper.defaultProps = {
  className: '',
  show: false,
};
