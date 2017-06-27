/* global window */
import React from 'react';
import PropTypes from 'prop-types';

import bindref from '../../utils/bindref';
import classnames from '../../utils/classnames';

export default class Collapse extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      style: null,
      transitioning: false,
    };

    this.bindCollapse = bindref('collapseNode', this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.transitioning) {
      if (nextProps.show && !this.props.show) {
        this.setState({
          transitioning: true,
        }, this.setHeight);
      } else if (!nextProps.show && this.props.show) {
        this.setHeight();
        this.setState({
          transitioning: true,
        }, () => {
          window.requestAnimationFrame(() => {
            this.setHeight(0);
          });
        });
      }
    }
  }

  getPXHeight = () => (
    `${this.collapseNode.scrollHeight}px`
  )

  setHeight = (height = this.getPXHeight()) => {
    this.setState({
      style: {
        height,
      },
    });
  }

  handleTransitionEnd = () => {
    this.setState({
      style: null,
      transitioning: false,
    });
  }

  render() {
    const {
      children,
      className,
      show,
      ...other
    } = this.props;
    const {
      style,
      transitioning,
    } = this.state;

    return (
      <div
        className={classnames({
          collapse: !show && !transitioning,
          'collapse show': show && !transitioning,
          collapsing: transitioning,
        }, className)}
        onTransitionEnd={this.handleTransitionEnd}
        ref={this.bindCollapse}
        style={style}
        {...other}
      >
        {children}
      </div>
    );
  }
}

Collapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  show: PropTypes.bool,
};

Collapse.defaultProps = {
  className: '',
  show: false,
};
