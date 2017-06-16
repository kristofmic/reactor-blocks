'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = DropdownToggleIcon;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function DropdownToggleIcon(props) {
  var className = props.className,
      show = props.show,
      up = props.up,
      other = _objectWithoutProperties(props, ['className', 'show', 'up']);

  return _react2.default.createElement('i', _extends({
    className: (0, _classnames2.default)('dropdown-toggle-icon fa', {
      'fa-chevron-down': !show && !up || show && up,
      'fa-chevron-up': show && !up || !show && up
    }, className)
  }, other));
}

DropdownToggleIcon.propTypes = {
  className: _propTypes2.default.string,
  show: _propTypes2.default.bool,
  up: _propTypes2.default.bool
};

DropdownToggleIcon.defaultProps = {
  className: '',
  show: false,
  up: false
};