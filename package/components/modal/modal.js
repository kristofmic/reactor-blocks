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

var _animate_in_hoc = require('../../utils/animate_in_hoc');

var _animate_in_hoc2 = _interopRequireDefault(_animate_in_hoc);

var _bindref = require('../../utils/bindref');

var _bindref2 = _interopRequireDefault(_bindref);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _toggle_body_class = require('../../utils/toggle_body_class');

var _toggle_body_class2 = _interopRequireDefault(_toggle_body_class);

var _classes = require('../../utils/classes');

var CLASSES = _interopRequireWildcard(_classes);

var _constants = require('../../constants');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$PureComponent) {
  _inherits(Modal, _React$PureComponent);

  function Modal(props) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

    _this.handleModalClick = function (e) {
      var _this$props = _this.props,
          onDismiss = _this$props.onDismiss,
          show = _this$props.show;
      var target = e.target;


      if (show && _this.modal === target) {
        onDismiss();
      }
    };

    _this.bindModal = (0, _bindref2.default)('modal', _this);
    return _this;
  }

  _createClass(Modal, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.show && !this.props.show) {
        (0, _toggle_body_class2.default)('modal-open', true);
      } else if (!nextProps.show && this.props.show) {
        (0, _toggle_body_class2.default)('modal-open', false);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          enter = _props.enter,
          onDismiss = _props.onDismiss,
          show = _props.show,
          size = _props.size,
          other = _objectWithoutProperties(_props, ['children', 'className', 'enter', 'onDismiss', 'show', 'size']);

      return _react2.default.createElement(
        'div',
        { className: 'modal-container' },
        _react2.default.createElement(
          'div',
          _extends({
            className: (0, _classnames3.default)('modal fade', (_classnames = {}, _defineProperty(_classnames, CLASSES.DISPLAY.BLOCK, enter), _defineProperty(_classnames, 'show', show), _classnames), className),
            onClick: this.handleModalClick,
            ref: this.bindModal,
            role: 'dialog',
            tabIndex: '-1'
          }, other),
          _react2.default.createElement(
            'div',
            { className: 'modal-dialog modal-' + size },
            _react2.default.createElement(
              'div',
              { className: 'modal-content' },
              children
            )
          )
        ),
        enter && _react2.default.createElement('div', {
          className: (0, _classnames3.default)('modal-backdrop fade', {
            show: show
          })
        })
      );
    }
  }]);

  return Modal;
}(_react2.default.PureComponent);

Modal.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  enter: _propTypes2.default.bool.isRequired,
  onDismiss: _propTypes2.default.func.isRequired,
  show: _propTypes2.default.bool.isRequired,
  size: _propTypes2.default.oneOf(_constants.SIZES)
};

Modal.defaultProps = {
  className: '',
  size: 'md'
};

var WrappedModal = (0, _animate_in_hoc2.default)(Modal, {
  transitionDuration: 300
});

WrappedModal.displayName = 'Modal';

exports.default = WrappedModal;