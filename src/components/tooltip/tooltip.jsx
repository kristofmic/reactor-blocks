import React from 'react';
import PropTypes from 'prop-types';

import animateInHOC from '../../utils/animate_in_hoc';
import classnames from '../../utils/classnames';

import {
  DIRECTIONS,
} from '../../constants';

function Tooltip(props) {
  const {
    children,
    className,
    enter,
    placement,
    show,
    ...other
  } = props;

  return (
    <div
      className={classnames('tooltip fade',
        `tooltip-${placement}`,
        {
          'd-none': !enter,
          show,
        },
      className)}
      role="tooltip"
      {...other}
    >
      <div className="tooltip-inner">
        {children}
      </div>
    </div>
  );
}

Tooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  enter: PropTypes.bool.isRequired,
  placement: PropTypes.oneOf(DIRECTIONS),
  show: PropTypes.bool.isRequired,
};

Tooltip.defaultProps = {
  className: '',
  placement: 'right',
};

const WrappedTooltip = animateInHOC(Tooltip, {
  transitionDuration: 150,
});

WrappedTooltip.displayName = 'Tooltip';

export default WrappedTooltip;
