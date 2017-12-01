import React from 'react';
import PropTypes from 'prop-types';

import { DropdownMenuItem } from '../dropdown';

import classnames from '../../utils/classnames';
import noop from '../../utils/noop';

export default class SelectOption extends React.PureComponent {
  handleMenuItemClick = (value, e) => {
    const {
      label,
      onClick,
    } = this.props;

    onClick({
      label,
      value,
    }, e);
  }

  render() {
    const {
      active,
      className,
      label,
      onClick,
      value,
      ...other
    } = this.props;

    return (
      <DropdownMenuItem
        className={classnames('select-option', {
          active,
        }, className)}
        onClick={this.handleMenuItemClick}
        value={value}
        {...other}
      >
        {label}
      </DropdownMenuItem>
    );
  }
}

SelectOption.displayName = 'SelectOption';

SelectOption.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  value: PropTypes.any,
};

SelectOption.defaultProps = {
  active: false,
  className: '',
  onClick: noop,
};
