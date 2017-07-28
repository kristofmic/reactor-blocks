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

var _link = require('../../content/link');

var _link2 = _interopRequireDefault(_link);

var _noop = require('../../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

var _classes = require('../../utils/classes');

var CLASSES = _interopRequireWildcard(_classes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function DropdownToggle(props) {
  var children = props.children,
      className = props.className,
      link = props.link,
      onClick = props.onClick,
      show = props.show,
      split = props.split,
      up = props.up,
      other = _objectWithoutProperties(props, ['children', 'className', 'link', 'onClick', 'show', 'split', 'up']);

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

  var Tag = link ? _link2.default : _button2.default;

  return _react2.default.createElement(
    Tag,
    _extends({
      className: 'dropdown-toggle ' + className,
      href: link ? '#' : undefined,
      onClick: onClick
    }, other),
    children,
    _react2.default.createElement(_dropdown_toggle_icon2.default, {
      className: CLASSES.MARGIN.LEFT_1,
      show: show,
      up: up
    })
  );
}

DropdownToggle.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  link: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired,
  show: _propTypes2.default.bool,
  split: _propTypes2.default.bool,
  up: _propTypes2.default.bool
};

DropdownToggle.defaultProps = {
  className: '',
  link: false,
  show: false,
  split: false,
  up: false
};