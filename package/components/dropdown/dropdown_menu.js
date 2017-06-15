'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = DropdownMenu;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _list = require('../../content/list');

var _list2 = _interopRequireDefault(_list);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function DropdownMenu(props) {
  var children = props.children,
      className = props.className,
      show = props.show,
      other = _objectWithoutProperties(props, ['children', 'className', 'show']);

  return _react2.default.createElement(
    _list2.default,
    _extends({
      className: (0, _classnames2.default)('dropdown-menu', {
        show: show
      }, className),
      unstyled: true
    }, other),
    children
  );
}

DropdownMenu.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  show: _propTypes2.default.bool
};

DropdownMenu.defaultProps = {
  className: '',
  show: false
};