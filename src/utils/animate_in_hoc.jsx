/* global window */
import React from 'react';
import PropTypes from 'prop-types';

export default function animateInHOC(Component, config = {}) {
  const {
    transitionDuration = 0,
  } = config;

  class AnimateInHOC extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        enter: false,
        show: false,
      };
    }

    componentDidMount() {
      if (this.props.show) {
        this.showComponent();
      }
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.show && !this.props.show && !this.state.show) {
        this.showComponent();
      } else if (!nextProps.show && this.props.show && this.state.show) {
        this.hideComponent();
      }
    }

    hideComponent = () => {
      const {
        show,
      } = this.state;

      if (!show) {
        return;
      }

      this.setState({
        show: false,
      }, () => {
        setTimeout(() => {
          this.setState({
            enter: false,
          });
        }, transitionDuration);
      });
    }

    showComponent = () => {
      const {
        show,
      } = this.state;

      if (show) {
        return;
      }

      this.setState({
        enter: true,
      }, () => {
        window.requestAnimationFrame(() => {
          this.setState({
            show: true,
          });
        });
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
        />
      );
    }
  }

  AnimateInHOC.propTypes = {
    show: PropTypes.bool,
  };

  AnimateInHOC.WrappedComponent = Component;

  return AnimateInHOC;
}
