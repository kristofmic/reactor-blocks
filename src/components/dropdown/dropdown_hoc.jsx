/* global window */
import React from 'react';
import ReactDOM from 'react-dom';

export default function dropdownHOC(Component) {
  return class DropdownHOC extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isMenuVisible: false,
      };
    }

    componentDidMount() {
      window.addEventListener('click', this.handleWindowClick);
    }

    componentWillUnmount() {
      window.removeEventListener('click', this.handleWindowClick);
    }

    handleWindowClick = (e) => {
      const {
        isMenuVisible,
      } = this.state;

      if (isMenuVisible) {
        const thisNode = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node

        if (!thisNode.contains(e.target)) {
          this.hideMenu();
        }
      }
    }

    hideMenu = () => {
      const {
        isMenuVisible,
      } = this.state;

      if (isMenuVisible) {
        this.setState({
          isMenuVisible: false,
        });
      }
    }

    showMenu = () => {
      const {
        isMenuVisible,
      } = this.state;

      if (!isMenuVisible) {
        this.setState({
          isMenuVisible: true,
        });
      }
    }

    toggleMenu = () => {
      const {
        isMenuVisible,
      } = this.state;

      if (isMenuVisible) {
        this.hideMenu();
      } else {
        this.showMenu();
      }
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          hideMenu={this.hideMenu}
          showMenu={this.showMenu}
          toggleMenu={this.toggleMenu}
        />
      );
    }
  };
}
