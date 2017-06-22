import React from 'react';
import PropTypes from 'prop-types';

import DropdownMenu from './dropdown_menu';
import DropdownToggle from './dropdown_toggle';
import DropdownWrapper from './dropdown_wrapper';

import dropdownHOC from './dropdown_hoc';

import {
  HORIZONTAL_POSITION,
} from '../../constants';

class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      menuItems: this.cloneMenuItems(props.children),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.children !== this.props.children) {
      this.setState({
        menuItems: this.cloneMenuItems(nextProps.children),
      });
    }
  }

  cloneMenuItems(children = this.props.children) {
    return React.Children.map(children, (child) => {
      if (child.displayName === 'DropdownMenuItem' || child.type.name === 'DropdownMenuItem') {
        return React.cloneElement(child, {
          onClick: this.handleMenuItemClick,
        });
      }

      return child;
    });
  }

  handleMenuItemClick = (...args) => {
    const {
      hideMenu,
      onMenuItemClick,
    } = this.props;

    hideMenu();

    onMenuItemClick(...args);
  }

  render() {
    const {
      children,
      className,
      hideMenu,
      isMenuVisible,
      label,
      menuHorizontalPosition,
      onMenuItemClick,
      showMenu,
      toggleMenu,
      up,
      ...other
    } = this.props;
    const {
      menuItems,
    } = this.state;

    return (
      <DropdownWrapper className={className}>
        <DropdownToggle
          onClick={toggleMenu}
          show={isMenuVisible}
          up={up}
          {...other}
        >
          {label}
        </DropdownToggle>
        <DropdownMenu
          horizontalPosition={menuHorizontalPosition}
          show={isMenuVisible}
          up={up}
        >
          {menuItems}
        </DropdownMenu>
      </DropdownWrapper>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  hideMenu: PropTypes.func.isRequired,
  isMenuVisible: PropTypes.bool.isRequired,
  label: PropTypes.string,
  menuHorizontalPosition: PropTypes.oneOf(HORIZONTAL_POSITION),
  onMenuItemClick: PropTypes.func,
  showMenu: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  up: PropTypes.bool,
};

Dropdown.defaultProps = {
  className: '',
  menuHorizontalPosition: 'left',
  up: false,
};

export default dropdownHOC(Dropdown);
