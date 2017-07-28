'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Loading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classes = require('../../utils/classes');

var CLASSES = _interopRequireWildcard(_classes);

var _constants = require('../../constants');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Loading(props) {
  var className = props.className,
      size = props.size,
      text = props.text,
      type = props.type,
      other = _objectWithoutProperties(props, ['className', 'size', 'text', 'type']);

  return _react2.default.createElement(
    'div',
    _extends({ className: 'loading loading-' + size + ' loading-' + type + ' ' + className }, other),
    _react2.default.createElement('div', { className: 'loading-icon' }),
    text && _react2.default.createElement(
      'p',
      { className: 'loading-text ' + CLASSES.MARGIN.Y_0 },
      text
    )
  );
}

Loading.propTypes = {
  className: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(_constants.SIZES),
  text: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(_constants.LOADING_CONTEXT_TYPES)
};

Loading.defaultProps = {
  className: '',
  size: 'md',
  type: 'primary'
};