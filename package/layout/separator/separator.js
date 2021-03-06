'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Separator;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Separator(props) {
  var className = props.className,
      spacing = props.spacing,
      other = _objectWithoutProperties(props, ['className', 'spacing']);

  return _react2.default.createElement('hr', _extends({
    className: (0, _classnames3.default)(_defineProperty({}, 'my-' + spacing, spacing), className)
  }, other));
}

Separator.propTypes = {
  className: _propTypes2.default.string,
  spacing: _propTypes2.default.oneOf([1, '1', 2, '2', 3, '3', 4, '4', 5, '5'])
};

Separator.defaultProps = {
  className: ''
};