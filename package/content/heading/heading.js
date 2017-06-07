'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Heading;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Heading(props) {
  var children = props.children,
      className = props.className,
      display = props.display,
      size = props.size,
      other = _objectWithoutProperties(props, ['children', 'className', 'display', 'size']);

  var Tag = 'h' + size;

  return _react2.default.createElement(
    Tag,
    _extends({
      className: (0, _classnames3.default)(_defineProperty({}, 'display-' + display, display), className)
    }, other),
    children
  );
}

Heading.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  display: _propTypes2.default.oneOf([1, '1', 2, '2', 3, '3', 4, '4']),
  size: _propTypes2.default.oneOf([1, '1', 2, '2', 3, '3', 4, '4', 5, '5', 6, '6']).isRequired
};

Heading.defaultProps = {
  className: '',
  display: false
};