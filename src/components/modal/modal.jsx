import React from 'react';
import PropTypes from 'prop-types';

import animateInHOC from '../../utils/animate_in_hoc';
import bindref from '../../utils/bindref';
import classnames from '../../utils/classnames';
import toggleBodyClass from '../../utils/toggle_body_class';

import {
  SIZES,
} from '../../constants';

class Modal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.bindModal = bindref('modal', this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.show && !this.props.show) {
      toggleBodyClass('modal-open', true);
    } else if (!nextProps.show && this.props.show) {
      toggleBodyClass('modal-open', false);
    }
  }

  handleModalClick = (e) => {
    const {
      onDismiss,
      show,
    } = this.props;
    const {
      target,
    } = e;

    if (show && this.modal === target) {
      onDismiss();
    }
  }

  render() {
    const {
      children,
      className,
      enter,
      onDismiss,
      show,
      size,
      ...other
    } = this.props;

    return (
      <div className="modal-container">
        <div
          className={classnames('modal fade', {
            'd-block': enter,
            show,
          }, className)}
          onClick={this.handleModalClick}
          ref={this.bindModal}
          role="dialog"
          tabIndex="-1"
          {...other}
        >
          <div className={`modal-dialog modal-${size}`}>
            <div className="modal-content">
              {children}
            </div>
          </div>
        </div>
        {enter && (
          <div
            className={classnames('modal-backdrop fade', {
              show,
            })}
          />
        )}
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  enter: PropTypes.bool.isRequired,
  onDismiss: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(SIZES),
};

Modal.defaultProps = {
  className: '',
  size: 'md',
};

const WrappedModal = animateInHOC(Modal, {
  transitionDuration: 300,
});

WrappedModal.displayName = 'Modal';

export default WrappedModal;
