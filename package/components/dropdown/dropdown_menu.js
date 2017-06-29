'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _list = require('../../content/list');

var _list2 = _interopRequireDefault(_list);

var _animate_in_hoc = require('../../utils/animate_in_hoc');

var _animate_in_hoc2 = _interopRequireDefault(_animate_in_hoc);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function DropdownMenu(props) {
  var children = props.children,
      className = props.className,
      enter = props.enter,
      horizontalPosition = props.horizontalPosition,
      show = props.show,
      up = props.up,
      other = _objectWithoutProperties(props, ['children', 'className', 'enter', 'horizontalPosition', 'show', 'up']);

  return _react2.default.createElement(
    _list2.default,
    _extends({
      className: (0, _classnames2.default)('dropdown-menu fade', {
        collapse: !enter,
        dropup: up,
        'dropdown-menu-right': horizontalPosition === 'right',
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
  enter: _propTypes2.default.bool.isRequired,
  horizontalPosition: _propTypes2.default.oneOf(_constants.HORIZONTAL_POSITION),
  show: _propTypes2.default.bool.isRequired,
  up: _propTypes2.default.bool
};

DropdownMenu.defaultProps = {
  className: '',
  horizontalPosition: 'left',
  up: false
};

var WrappedDropdownMenu = (0, _animate_in_hoc2.default)(DropdownMenu, {
  transitionDuration: 150
});

WrappedDropdownMenu.displayName = 'DropdownMenu';

exports.default = WrappedDropdownMenu;