import React from 'react';
import PropTypes from 'prop-types';

import animateInHOC from '../../utils/animate_in_hoc';
import classnames from '../../utils/classnames';
import toggleBodyClass from '../../utils/toggle_body_class';

class NavbarCollapse extends React.PureComponent {
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
      enter,
      show,
      ...other
    } = this.props;

    return (
      <div
        className={classnames('navbar-collapse', {
          collapse: !enter,
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
  enter: PropTypes.bool.isRequired,
  show: PropTypes.bool.isRequired,
};

NavbarCollapse.defaultProps = {
  className: '',
};

const WrappedNavbarCollapse = animateInHOC(NavbarCollapse, {
  transitionDuration: 350,
});

WrappedNavbarCollapse.displayName = 'NavbarCollapse';

export default WrappedNavbarCollapse;
