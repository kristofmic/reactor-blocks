import React from 'react';
import PropTypes from 'prop-types';

import PopoverContent from './popover_content';
import PopoverTitle from './popover_title';

import animateInHOC from '../../utils/animate_in_hoc';
import bindref from '../../utils/bindref';
import classnames from '../../utils/classnames';

import {
  DIRECTIONS,
} from '../../constants';

const OPPOSITE_PLACEMENT = {
  bottom: 'top',
  left: 'right',
  right: 'left',
  top: 'bottom',
};

class Popover extends React.PureComponent {
  constructor(props) {
    super(props);

    this.bindPopover = bindref('popover', this);
  }

  render() {
    const {
      children,
      className,
      enter,
      placement,
      show,
      title,
      ...other
    } = this.props;
    return (
      <div
        className={classnames('popover fade',
          `popover-${placement} bs-tether-element-attached-${OPPOSITE_PLACEMENT[placement]}`,
          {
            'd-none': !enter,
            show,
            'popover-no-title': !title,
          },
        className)}
        ref={this.bindPopover}
        {...other}
      >
        {!!title && (
          <PopoverTitle>{title}</PopoverTitle>
        )}
        <PopoverContent>
          {children}
        </PopoverContent>
      </div>
    );
  }
}

Popover.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  enter: PropTypes.bool.isRequired,
  placement: PropTypes.oneOf(DIRECTIONS),
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

Popover.defaultProps = {
  className: '',
  placement: 'right',
};

const WrappedPopover = animateInHOC(Popover);

WrappedPopover.displayName = 'Popover';

export default WrappedPopover;
