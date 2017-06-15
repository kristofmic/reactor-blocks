import React from 'react';
import PropTypes from 'prop-types';

import { ListItem } from '../../content/list';

import noop from '../../utils/noop';

export default class DropdownItem extends React.PureComponent {
  handleClick = (e) => {
    const {
      id,
      onClick,
    } = this.props;

    onClick(id, e);
  }

  render() {
    const {
      children,
      className,
      id,
      onClick,
      ...other
    } = this.props;

    return (
      <ListItem
        className={`dropdown-item ${className}`}
        onClick={this.handleClick}
        {...other}
      >
        {children}
      </ListItem>
    );
  }
}

DropdownItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.any,
  onClick: PropTypes.func,
};

DropdownItem.defaultProps = {
  className: '',
  onClick: noop,
};
