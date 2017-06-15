'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = DropdownToggle;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function DropdownToggle(props) {
  var children = props.children,
      className = props.className,
      split = props.split,
      other = _objectWithoutProperties(props, ['children', 'className', 'split']);

  return _react2.default.createElement(
    _button2.default,
    _extends({
      className: (0, _classnames2.default)('dropdown-toggle', {
        'dropdown-toggle-split': split
      }, className)
    }, other),
    children
  );
}

DropdownToggle.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  split: _propTypes2.default.bool
};

DropdownToggle.defaultProps = {
  className: '',
  split: false
};