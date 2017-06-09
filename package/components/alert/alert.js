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

var _dismiss = require('../dismiss');

var _dismiss2 = _interopRequireDefault(_dismiss);

var _heading = require('../../content/heading');

var _heading2 = _interopRequireDefault(_heading);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _noop = require('../../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DISMISS_TIMEOUT = 150;

function mapChildren(children) {
  return _react2.default.Children.map(children, function (child) {
    if (child.type == null) {
      return child;
    }
    // look for shallow anchor elements or Link components (from react-router)
    if (child.type === 'a' || child.type.name === 'Link') {
      return _react2.default.cloneElement(child, { className: child.props.className + ' alert-link' });
    }

    return child;
  });
}

var Alert = function (_React$PureComponent) {
  _inherits(Alert, _React$PureComponent);

  function Alert() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Alert);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Alert.__proto__ || Object.getPrototypeOf(Alert)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      dismissing: false
    }, _this.handleDismiss = function () {
      _this.setState({
        dismissing: true
      });

      setTimeout(_this.props.onDismiss, DISMISS_TIMEOUT);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alert, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          dismissable = _props.dismissable,
          heading = _props.heading,
          onDismiss = _props.onDismiss,
          type = _props.type,
          other = _objectWithoutProperties(_props, ['children', 'className', 'dismissable', 'heading', 'onDismiss', 'type']);

      var dismissing = this.state.dismissing;


      var mappedChildren = mapChildren(children);

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames2.default)('alert alert-' + type + ' ' + className, {
            'alert-dismissible fade': dismissable,
            show: dismissable && !dismissing
          }),
          role: 'alert'
        }, other),
        dismissable && _react2.default.createElement(_dismiss2.default, { onClick: this.handleDismiss }),
        heading && _react2.default.createElement(
          _heading2.default,
          { className: 'alert-heading', size: '4' },
          heading
        ),
        mappedChildren
      );
    }
  }]);

  return Alert;
}(_react2.default.PureComponent);

exports.default = Alert;


Alert.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  dismissable: _propTypes2.default.bool,
  heading: _propTypes2.default.string,
  onDismiss: _propTypes2.default.func,
  type: _propTypes2.default.oneOf(_constants.ALERT_CONTEXT_TYPES)
};

Alert.defaultProps = {
  className: '',
  dismissable: false,
  onDismiss: _noop2.default,
  type: 'info'
};