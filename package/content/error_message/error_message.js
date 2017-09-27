'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../../components/button');

var _button2 = _interopRequireDefault(_button);

var _classes = require('../../utils/classes');

var CLASSES = _interopRequireWildcard(_classes);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

if (process.env.BROWSER) {
  require('./error_message.scss');
}

function ErrorMessage(props) {
  var children = props.children,
      className = props.className,
      onRetry = props.onRetry,
      other = _objectWithoutProperties(props, ['children', 'className', 'onRetry']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames2.default)('error-message', CLASSES.TEXT.CENTER, CLASSES.FLEXBOX.DISPLAY.FLEX, CLASSES.FLEXBOX.DIRECTION.COLUMN, CLASSES.FLEXBOX.JUSTIFY.CENTER, className)
    }, other),
    _react2.default.createElement(
      'p',
      { className: 'error-message-text ' + CLASSES.MARGIN.Y_0 },
      children
    ),
    onRetry && _react2.default.createElement(
      _button2.default,
      { onClick: onRetry, type: 'link', size: 'sm' },
      'Retry'
    )
  );
}

ErrorMessage.propTypes = {
  children: _propTypes2.default.string,
  className: _propTypes2.default.string,
  onRetry: _propTypes2.default.func
};

ErrorMessage.defaultProps = {
  children: 'Oops! Something went wrong...',
  className: ''
};

exports.default = ErrorMessage;