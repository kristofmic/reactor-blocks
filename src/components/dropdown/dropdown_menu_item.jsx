import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from '../../content/list';

import classnames from '../../utils/classnames';
import noop from '../../utils/noop';

export default class DropdownMenuItem extends React.PureComponent {
  handleClick = (e) => {
    const {
      disabled,
      id,
      onClick,
    } = this.props;

    if (!disabled) {
      onClick(id, e);
    }
  }

  render() {
    const {
      children,
      className,
      disabled,
      id,
      onClick,
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
  id: PropTypes.any,
  onClick: PropTypes.func,
};

DropdownMenuItem.defaultProps = {
  className: '',
  disabled: false,
  onClick: noop,
};
