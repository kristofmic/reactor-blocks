'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TableHead;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('../../utils/classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function TableHead(props) {
  var children = props.children,
      className = props.className,
      defaultType = props.defaultType,
      inverse = props.inverse,
      other = _objectWithoutProperties(props, ['children', 'className', 'defaultType', 'inverse']);

  return _react2.default.createElement(
    'thead',
    _extends({
      className: (0, _classnames2.default)({
        'thead-default': defaultType,
        'thead-inverse': inverse
      })
    }, other),
    children
  );
}

TableHead.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  defaultType: _propTypes2.default.bool,
  inverse: _propTypes2.default.bool
};

TableHead.defaultProps = {
  className: '',
  defaultType: false,
  inverse: false
};