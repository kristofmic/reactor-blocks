/* global window */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import DropdownMenuDivider from './dropdown_menu_divider';
import DropdownMenuHeader from './dropdown_menu_header';
import DropdownMenuItem from './dropdown_menu_item';
import DropdownMenu from './dropdown_menu';
import DropdownToggle from './dropdown_toggle';
import DropdownWrapper from './dropdown_wrapper';

import {
  DROPDOWN_MENU_ITEM_TYPES,
  HORIZONTAL_POSITION,
} from '../../constants';

export default class Dropdown extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
    };
  }

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleMenuItemClick = (...args) => {
    const {
      onMenuItemClick,
    } = this.props;

    this.hideMenu();

    onMenuItemClick(...args);
  }

  handleWindowClick = (e) => {
    const {
      showMenu,
    } = this.state;

    if (showMenu) {
      const thisNode = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node

      if (!thisNode.contains(e.target)) {
        this.hideMenu();
      }
    }
  }

  hideMenu = () => {
    const {
      showMenu,
    } = this.state;

    if (showMenu) {
      this.setState({
        showMenu: false,
      });
    }
  }

  showMenu = () => {
    const {
      showMenu,
    } = this.state;

    if (!showMenu) {
      this.setState({
        showMenu: true,
      });
    }
  }

  toggleMenu = () => {
    const {
      showMenu,
    } = this.state;

    if (showMenu) {
      this.hideMenu();
    } else {
      this.showMenu();
    }
  }

  render() {
    const {
      children,
      className,
      menuHorizontalPosition,
      menuItems,
      onMenuItemClick,
      up,
      ...other
    } = this.props;
    const {
      showMenu,
    } = this.state;

    return (
      <DropdownWrapper className={className}>
        <DropdownToggle
          onClick={this.toggleMenu}
          show={showMenu}
          up={up}
          {...other}
        >
          {children}
        </DropdownToggle>
        <DropdownMenu
          horizontalPosition={menuHorizontalPosition}
          show={showMenu}
          up={up}
        >
          {menuItems.map((item) => {
            const {
              id,
              label,
              type = 'item',
              ...other
            } = item;

            switch (type) {
              case 'divider':
                return (
                  <DropdownMenuDivider key={id} {...other} />
                );
              case 'header':
                return (
                  <DropdownMenuHeader key={id} {...other}>
                    {label}
                  </DropdownMenuHeader>
                );
              case 'item':
              default:
                return (
                  <DropdownMenuItem
                    key={id}
                    id={id}
                    onClick={this.handleMenuItemClick}
                    {...other}
                  >
                    {label}
                  </DropdownMenuItem>
                );
            }
          })}
        </DropdownMenu>
      </DropdownWrapper>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  menuHorizontalPosition: PropTypes.oneOf(HORIZONTAL_POSITION),
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    label: PropTypes.string,
    type: PropTypes.oneOf(DROPDOWN_MENU_ITEM_TYPES),
  })),
  onMenuItemClick: PropTypes.func,
  up: PropTypes.bool,
};

Dropdown.defaultProps = {
  className: '',
  menuHorizontalPosition: 'left',
  menuItems: [],
  up: false,
};
