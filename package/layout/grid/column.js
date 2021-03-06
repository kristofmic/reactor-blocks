'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Column;

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

function Column(props) {
  var children = props.children,
      className = props.className,
      newLine = props.newLine,
      order = props.order,
      width = props.width,
      widths = props.widths,
      verticalAlignment = props.verticalAlignment,
      other = _objectWithoutProperties(props, ['children', 'className', 'newLine', 'order', 'width', 'widths', 'verticalAlignment']);

  var classNameProp = '';

  if (newLine) {
    classNameProp = 'w-100';
  } else {
    var _classnames;

    var widthClassNames = widths && Object.getOwnPropertyNames(widths).reduce(function (acc, size) {
      return acc + ' col-' + size + '-' + widths[size];
    }, '');

    classNameProp = (0, _classnames3.default)((_classnames = {
      col: !width
    }, _defineProperty(_classnames, 'col-' + width, width), _defineProperty(_classnames, 'align-self-' + verticalAlignment, verticalAlignment), _defineProperty(_classnames, 'flex-' + order, order), _classnames), widthClassNames);
  }

  return _react2.default.createElement(
    'div',
    _extends({
      className: classNameProp + ' ' + className
    }, other),
    children
  );
}

Column.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  newLine: _propTypes2.default.bool,
  order: _propTypes2.default.oneOf(_constants.COLUMN_ORDER),
  width: _propTypes2.default.oneOf(_constants.COLUMN_WIDTHS),
  widths: _propTypes2.default.shape({
    sm: _propTypes2.default.oneOf(_constants.COLUMN_WIDTHS),
    md: _propTypes2.default.oneOf(_constants.COLUMN_WIDTHS),
    lg: _propTypes2.default.oneOf(_constants.COLUMN_WIDTHS),
    xl: _propTypes2.default.oneOf(_constants.COLUMN_WIDTHS)
  }),
  verticalAlignment: _propTypes2.default.oneOf(_constants.VERTICAL_ALIGNMENT)
};

Column.defaultProps = {
  className: '',
  newLine: false
};