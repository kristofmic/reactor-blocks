import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from '../../content/list';

import classnames from '../../utils/classnames';
import noop from '../../utils/noop';

export default class DropdownMenuItem extends React.PureComponent {
  handleClick = (e) => {
    const {
      disabled,
      onClick,
      value,
    } = this.props;

    if (!disabled) {
      onClick(value, e);
    }
  }

  render() {
    const {
      children,
      className,
      disabled,
      onClick,
      value,
      ...other
    } = this.props;

    return (
      <ListItem
        className={classnames('dropdown-item', {
          disabled,
        }, className)}
        onClick={this.handleClick}
        {...other}
      >
        {children}
      </ListItem>
    );
  }
}

DropdownMenuItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  value: PropTypes.any,
};

DropdownMenuItem.defaultProps = {
  className: '',
  disabled: false,
  onClick: noop,
};
