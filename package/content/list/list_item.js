'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ListItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ListItem(props) {
  var action = props.action,
      active = props.active,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      group = props.group,
      inline = props.inline,
      type = props.type,
      other = _objectWithoutProperties(props, ['action', 'active', 'children', 'className', 'disabled', 'group', 'inline', 'type']);

  return _react2.default.createElement(
    'li',
    _extends({
      className: (0, _classnames3.default)(_defineProperty({
        'list-group-item-action': group && action,
        active: active,
        disabled: disabled,
        'list-group-item': group,
        'list-inline-item': inline
      }, 'list-group-item-' + type, group && type), className)
    }, other),
    children
  );
}

ListItem.propTypes = {
  action: _propTypes2.default.bool,
  active: _propTypes2.default.bool,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  group: _propTypes2.default.bool,
  inline: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(_constants.LIST_ITEM_CONTEXT_TYPES)
};

ListItem.defaultProps = {
  action: false,
  active: false,
  className: '',
  disabled: false,
  group: false,
  inline: false
};