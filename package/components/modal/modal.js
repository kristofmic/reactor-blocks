'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bindref = require('../../utils/bindref');

var _bindref2 = _interopRequireDefault(_bindref);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window, document */


function toggleBodyClass(className, add) {
  var _document = document,
      body = _document.body;

  var hasClass = body.className.indexOf(className) > -1;

  if (hasClass && !add) {
    body.className = body.className.replace(className, '').trim();
  } else if (!hasClass && add) {
    body.className = (body.className + ' ' + className).trim();
  }
}

var Modal = function (_React$PureComponent) {
  _inherits(Modal, _React$PureComponent);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.handleModalClick = function (e) {
      var onDismiss = _this.props.onDismiss;
      var show = _this.state.show;
      var target = e.target;


      if (show && _this.modal === target) {
        onDismiss();
      }
    };

    _this.handleModalDialogTransitionEnd = function () {
      var _this$state = _this.state,
          enter = _this$state.enter,
          show = _this$state.show;


      if (!show && enter) {
        window.requestAnimationFrame(function () {
          _this.setState({
            enter: false
          });

          toggleBodyClass('modal-open', false);
        });
      }
    };

    _this.hideModal = function () {
      var show = _this.state.show;


      if (!show) {
        return;
      }

      _this.setState({
        show: false
      });
    };

    _this.showModal = function () {
      var show = _this.state.show;


      if (show) {
        return;
      }

      toggleBodyClass('modal-open', true);

      _this.setState({
        enter: true
      }, function () {
        window.requestAnimationFrame(function () {
          _this.setState({
            show: true
          });
        });
      });
    };

    _this.state = {
      enter: false,
      show: false
    };

    _this.bindModal = (0, _bindref2.default)('modal', _this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.show) {
        this.showModal();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show && !this.props.show && !this.state.show) {
        this.showModal();
      } else if (!nextProps.show && this.props.show && this.state.show) {
        this.hideModal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          onDismiss = _props.onDismiss,
          show = _props.show,
          size = _props.size,
          other = _objectWithoutProperties(_props, ['children', 'className', 'onDismiss', 'show', 'size']);

      var _state = this.state,
          enter = _state.enter,
          stateShow = _state.show;


      return _react2.default.createElement(
        'div',
        { className: 'modal-container' },
        _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames2.default)('modal fade', {
              'd-block': enter,
              show: stateShow
            }, className),
            onClick: this.handleModalClick,
            ref: this.bindModal,
            role: 'dialog',
            tabIndex: '-1'
          }, other),
          _react2.default.createElement(
            'div',
            {
              className: 'modal-dialog modal-' + size,
              onTransitionEnd: this.handleModalDialogTransitionEnd
            },
            _react2.default.createElement(
              'div',
              { className: 'modal-content' },
              children
            )
          )
        ),
        enter && _react2.default.createElement('div', {
          className: (0, _classnames2.default)('modal-backdrop fade', {
            show: stateShow
          })
        })
      );
    }
  }]);

  return Modal;
}(_react2.default.PureComponent);

exports.default = Modal;


Modal.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  onDismiss: _propTypes2.default.func.isRequired,
  show: _propTypes2.default.bool.isRequired,
  size: _propTypes2.default.oneOf(_constants.SIZES)
};

Modal.defaultProps = {
  className: '',
  size: 'md'
};