'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _popover_content = require('./popover_content');

var _popover_content2 = _interopRequireDefault(_popover_content);

var _popover_title = require('./popover_title');

var _popover_title2 = _interopRequireDefault(_popover_title);

var _animate_in_hoc = require('../../utils/animate_in_hoc');

var _animate_in_hoc2 = _interopRequireDefault(_animate_in_hoc);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _classes = require('../../utils/classes');

var CLASSES = _interopRequireWildcard(_classes);

var _constants = require('../../constants');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var OPPOSITE_PLACEMENT = {
  bottom: 'top',
  left: 'right',
  right: 'left',
  top: 'bottom'
};

function Popover(props) {
  var _classnames;

  var children = props.children,
      className = props.className,
      enter = props.enter,
      placement = props.placement,
      show = props.show,
      title = props.title,
      other = _objectWithoutProperties(props, ['children', 'className', 'enter', 'placement', 'show', 'title']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames3.default)('popover fade', 'popover-' + placement + ' bs-tether-element-attached-' + OPPOSITE_PLACEMENT[placement], (_classnames = {}, _defineProperty(_classnames, CLASSES.DISPLAY.NONE, !enter), _defineProperty(_classnames, 'show', show), _defineProperty(_classnames, 'popover-no-title', !title), _classnames), className)
    }, other),
    !!title && _react2.default.createElement(
      _popover_title2.default,
      null,
      title
    ),
    _react2.default.createElement(
      _popover_content2.default,
      null,
      children
    )
  );
}

Popover.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  enter: _propTypes2.default.bool.isRequired,
  placement: _propTypes2.default.oneOf(_constants.DIRECTIONS),
  show: _propTypes2.default.bool.isRequired,
  title: _propTypes2.default.string
};

Popover.defaultProps = {
  className: '',
  placement: 'right'
};

var WrappedPopover = (0, _animate_in_hoc2.default)(Popover, {
  transitionDuration: 150
});

WrappedPopover.displayName = 'Popover';

exports.default = WrappedPopover;