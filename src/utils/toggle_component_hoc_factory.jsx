/* global window */
import React from 'react';
import ReactDOM from 'react-dom';

export default function toggleComponentHOCFactory(config = {}) {
  const {
    autoDismiss = false,
    name = 'Component',
  } = config;

  return function toggleComponentHOC(Component) {
    class ToggleComponentHOC extends React.PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          isComponentVisible: false,
        };
      }

      componentDidMount() {
        this.mounted = true;

        if (autoDismiss) {
          window.addEventListener('click', this.handleWindowClick);
        }
      }

      componentWillUnmount() {
        this.mounted = false;

        if (autoDismiss) {
          window.removeEventListener('click', this.handleWindowClick);
        }
      }

      handleWindowClick = (e) => {
        const {
          isComponentVisible,
        } = this.state;

        if (isComponentVisible) {
          const thisNode = ReactDOM.findDOMNode(this); // eslint-disable-line react/no-find-dom-node

          if (!thisNode.contains(e.target)) {
            this.hideComponent();
          }
        }
      }

      hideComponent = () => {
        const {
          isComponentVisible,
        } = this.state;

        if (isComponentVisible && this.mounted) {
          this.setState({
            isComponentVisible: false,
          });
        }
      }

      showComponent = () => {
        const {
          isComponentVisible,
        } = this.state;

        if (!isComponentVisible && this.mounted) {
          this.setState({
            isComponentVisible: true,
          });
        }
      }

      toggleComponent = () => {
        const {
          isComponentVisible,
        } = this.state;

        if (isComponentVisible) {
          this.hideComponent();
        } else {
          this.showComponent();
        }
      }

      render() {
        const {
          isComponentVisible,
        } = this.state;

        const otherProps = {
          [`is${name}Visible`]: isComponentVisible,
          [`hide${name}`]: this.hideComponent,
          [`show${name}`]: this.showComponent,
          [`toggle${name}`]: this.toggleComponent,
        };

        return (
          <Component
            {...this.props}
            {...otherProps}
          />
        );
      }
    }

    ToggleComponentHOC.WrappedComponent = Component;

    return ToggleComponentHOC;
  }
}
