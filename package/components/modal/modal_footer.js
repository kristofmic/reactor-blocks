'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ModalFooter;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function ModalFooter(props) {
  var children = props.children,
      className = props.className,
      primaryLabel = props.primaryLabel,
      primaryOnClick = props.primaryOnClick,
      secondaryLabel = props.secondaryLabel,
      secondaryOnClick = props.secondaryOnClick,
      other = _objectWithoutProperties(props, ['children', 'className', 'primaryLabel', 'primaryOnClick', 'secondaryLabel', 'secondaryOnClick']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: 'modal-footer ' + className
    }, other),
    !!(primaryLabel && primaryOnClick) && _react2.default.createElement(
      _button2.default,
      {
        onClick: primaryOnClick,
        type: 'primary'
      },
      primaryLabel
    ),
    !!(secondaryLabel && secondaryOnClick) && _react2.default.createElement(
      _button2.default,
      {
        onClick: secondaryOnClick,
        type: 'secondary'
      },
      secondaryLabel
    ),
    children
  );
}

ModalFooter.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  primaryLabel: _propTypes2.default.string,
  primaryOnClick: _propTypes2.default.func,
  secondaryLabel: _propTypes2.default.string,
  secondaryOnClick: _propTypes2.default.func
};

ModalFooter.defaultProps = {
  className: ''
};