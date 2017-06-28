import React from 'react';
import PropTypes from 'prop-types';

import classnames from '../../utils/classnames';
import toggleBodyClass from '../../utils/toggle_body_class';

export default class NavbarCollapse extends React.PureComponent {
  componentWillReceiveProps(nextProps) {
    if (nextProps.show && !this.props.show) {
      toggleBodyClass('modal-open', true);
    } else if (!nextProps.show && this.props.show) {
      toggleBodyClass('modal-open', false);
    }
  }

  render() {
    const {
      children,
      className,
      show,
      ...other
    } = this.props;

    return (
      <div
        className={classnames('navbar-collapse', {
          show,
        }, className)}
        {...other}
      >
        {children}
      </div>
    );
  }
}

NavbarCollapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  show: PropTypes.bool.isRequired,
};

NavbarCollapse.defaultProps = {
  className: '',
};
