'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = TableCell;

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

function TableCell(props) {
  var _classnames;

  var children = props.children,
      className = props.className,
      heading = props.heading,
      inverse = props.inverse,
      type = props.type,
      other = _objectWithoutProperties(props, ['children', 'className', 'heading', 'inverse', 'type']);

  var Tag = heading ? 'th' : 'td';

  return _react2.default.createElement(
    Tag,
    _extends({
      className: (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, 'table-' + type, type && !inverse), _defineProperty(_classnames, 'bg-' + type, type && inverse), _classnames))
    }, other),
    children
  );
}

TableCell.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  heading: _propTypes2.default.bool,
  inverse: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(_constants.TABLE_CONTEXT_TYPES)
};

TableCell.defaultProps = {
  className: '',
  heading: false,
  inverse: false
};