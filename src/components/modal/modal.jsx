/* global window */
import React from 'react';
import PropTypes from 'prop-types';

import bindref from '../../utils/bindref';
import classnames from '../../utils/classnames';
import toggleBodyClass from '../../utils/toggle_body_class';

import {
  SIZES,
} from '../../constants';

export default class Modal extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      enter: false,
      show: false,
    };

    this.bindModal = bindref('modal', this);
  }

  componentDidMount() {
    if (this.props.show) {
      this.showModal();
    }
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.show && !this.props.show && !this.state.show) {
      this.showModal();
    } else if (!nextProps.show && this.props.show && this.state.show) {
      this.hideModal();
    }
  }

  handleModalClick = (e) => {
    const {
      onDismiss,
    } = this.props;
    const {
      show,
    } = this.state;
    const {
      target,
    } = e;

    if (show && this.modal === target) {
      onDismiss();
    }
  }

  handleModalDialogTransitionEnd = () => {
    const {
      enter,
      show,
    } = this.state;

    if (!show && enter) {
      window.requestAnimationFrame(() => {
        this.setState({
          enter: false,
        });

        toggleBodyClass('modal-open', false);
      });
    }
  }

  hideModal = () => {
    const {
      show,
    } = this.state;

    if (!show) {
      return;
    }

    this.setState({
      show: false,
    });
  }

  showModal = () => {
    const {
      show,
    } = this.state;

    if (show) {
      return;
    }

    toggleBodyClass('modal-open', true);

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
    const {
      children,
      className,
      onDismiss,
      show,
      size,
      ...other
    } = this.props;
    const {
      enter,
      show: stateShow,
    } = this.state;

    return (
      <div className="modal-container">
        <div
          className={classnames('modal fade', {
            'd-block': enter,
            show: stateShow,
          }, className)}
          onClick={this.handleModalClick}
          ref={this.bindModal}
          role="dialog"
          tabIndex="-1"
          {...other}
        >
          <div
            className={`modal-dialog modal-${size}`}
            onTransitionEnd={this.handleModalDialogTransitionEnd}
          >
            <div className="modal-content">
              {children}
            </div>
          </div>
        </div>
        {enter && (
          <div
            className={classnames('modal-backdrop fade', {
              show: stateShow,
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
  onDismiss: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(SIZES),
};

Modal.defaultProps = {
  className: '',
  size: 'md',
};
