/* global window */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import DropdownItem from './dropdown_item';
import DropdownMenu from './dropdown_menu';
import DropdownToggle from './dropdown_toggle';
import DropdownWrapper from './dropdown_wrapper';

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
      menuItems,
      onMenuItemClick,
      ...other
    } = this.props;
    const {
      showMenu,
    } = this.state;

    return (
      <DropdownWrapper className={className}>
        <DropdownToggle onClick={this.toggleMenu} {...other}>
          {children}
        </DropdownToggle>
        <DropdownMenu show={showMenu}>
          {menuItems.map(item => (
            <DropdownItem
              key={item.id}
              id={item.id}
              onClick={this.handleMenuItemClick}
            >
              {item.label}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </DropdownWrapper>
    );
  }
}

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  })),
  onMenuItemClick: PropTypes.func,
};

Dropdown.defaultProps = {
  className: '',
  menuItems: [],
};
