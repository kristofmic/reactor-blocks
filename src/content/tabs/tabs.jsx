/* global window */
import React from 'react';
import PropTypes from 'prop-types';

export default class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: props.activeTab,
      showTab: props.activeTab,
    };

    this.isTransitioning = false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.activeTab !== this.props.activeTab) {
      if (nextProps.fade) {
        this.transitionTab();
      } else {
        this.setState({
          activeTab: nextProps.activeTab,
          showTab: nextProps.activeTab,
        });
      }
    }
  }

  handleTabTransitionEnd = () => {
    const {
      activeTab,
      fade,
    } = this.props;
    const {
      showTab,
    } = this.state;

    if (fade && showTab == null && showTab !== activeTab) {
      window.requestAnimationFrame(() => {
        this.setState({
          activeTab,
        }, () => {
          window.requestAnimationFrame(() => {
            this.setState({
              showTab: activeTab,
            });

            this.isTransitioning = false;
          });
        });
      });
    }
  }

  transitionTab() {
    if (this.isTransitioning) {
      return;
    }

    this.isTransitioning = true;

    this.setState({
      showTab: null,
    });
  }

  render() {
    const {
      activeTab,
      children,
      className,
      fade,
      ...other
    } = this.props;
    const {
      activeTab: activeTabState,
      showTab,
    } = this.state;

    const childrenTabs = React.Children.map(children, (child) => {
      if (child.displayName === 'Tab' || child.type.name === 'Tab') {
        return React.cloneElement(child, {
          active: child.props.value === activeTabState,
          fade,
          onTransitionEnd: this.handleTabTransitionEnd,
          show: fade && child.props.value === showTab,
        });
      }

      return child;
    });

    return (
      <div
        className={`tab-content ${className}`}
        {...other}
      >
        {childrenTabs}
      </div>
    );
  }
}

Tabs.propTypes = {
  activeTab: PropTypes.any,
  children: PropTypes.node,
  className: PropTypes.string,
  fade: PropTypes.bool,
};

Tabs.defaultProps = {
  className: '',
  fade: false,
};
