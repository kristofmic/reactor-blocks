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

var _dropdown_toggle_icon = require('./dropdown_toggle_icon');

var _dropdown_toggle_icon2 = _interopRequireDefault(_dropdown_toggle_icon);

var _noop = require('../../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function DropdownToggle(props) {
  var children = props.children,
      className = props.className,
      onClick = props.onClick,
      show = props.show,
      split = props.split,
      up = props.up,
      other = _objectWithoutProperties(props, ['children', 'className', 'onClick', 'show', 'split', 'up']);

  if (split) {
    return _react2.default.createElement(
      _button.ButtonGroup,
      { className: className },
      _react2.default.createElement(
        _button2.default,
        _extends({ onClick: _noop2.default }, other),
        children
      ),
      _react2.default.createElement(
        _button2.default,
        _extends({ className: 'dropdown-toggle dropdown-toggle-split', onClick: onClick }, other),
        _react2.default.createElement(_dropdown_toggle_icon2.default, { show: show, up: up })
      )
    );
  }

  return _react2.default.createElement(
    _button2.default,
    _extends({ className: 'dropdown-toggle ' + className, onClick: onClick }, other),
    children,
    _react2.default.createElement(_dropdown_toggle_icon2.default, { className: 'ml-1', show: show, up: up })
  );
}

DropdownToggle.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired,
  show: _propTypes2.default.bool,
  split: _propTypes2.default.bool,
  up: _propTypes2.default.bool
};

DropdownToggle.defaultProps = {
  className: '',
  show: false,
  split: false,
  up: false
};