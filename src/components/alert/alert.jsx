import React from 'react';
import PropTypes from 'prop-types';

import Dismiss from '../dismiss';
import Heading from '../../content/heading';

import classnames from '../../utils/classnames';
import noop from '../../utils/noop';

import { CONTEXT_TYPES } from '../../constants';

const DISMISS_TIMEOUT = 150;

function mapChildren(children) {
  return React.Children.map(children, (child) => {
    if (child.type == null) {
      return child;
    }
    // look for shallow anchor elements or Link components (from react-router)
    if (child.type === 'a' || child.type.name === 'Link') {
      return React.cloneElement(child, { className: `${child.props.className} alert-link` });
    }

    return child;
  });
}

export default class Alert extends React.PureComponent {
  state = {
    dismissing: false,
  }

  handleDismiss = () => {
    this.setState({
      dismissing: true,
    });

    setTimeout(this.props.onDismiss, DISMISS_TIMEOUT);
  }

  render() {
    const {
      children,
      className,
      dismissable,
      heading,
      onDismiss,
      type,
      ...other
    } = this.props;
    const {
      dismissing,
    } = this.state;

    const mappedChildren = mapChildren(children);

    return (
      <div
        className={classnames(`alert alert-${type} ${className}`, {
          'alert-dismissible fade': dismissable,
          show: dismissable && !dismissing,
        })}
        role="alert"
        {...other}
      >
        {dismissable && (
          <Dismiss onClick={this.handleDismiss} />
        )}
        {heading && (
          <Heading className="alert-heading" size="4">{heading}</Heading>
        )}
        {mappedChildren}
      </div>
    );
  }
}

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  heading: PropTypes.string,
  onDismiss: PropTypes.func,
  type: PropTypes.oneOf(CONTEXT_TYPES),
};

Alert.defaultProps = {
  className: '',
  dismissable: false,
  onDismiss: noop,
  type: 'info',
};
