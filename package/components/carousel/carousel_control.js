'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CarouselControl;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function CarouselControl(props) {
  var className = props.className,
      type = props.type,
      other = _objectWithoutProperties(props, ['className', 'type']);

  var iconDirection = type === 'next' ? 'right' : 'left';

  return _react2.default.createElement(
    _button2.default,
    _extends({
      className: 'carousel-control-' + type + ' ' + className,
      type: 'link'
    }, other),
    _react2.default.createElement('i', { className: 'fa fa-chevron-' + iconDirection })
  );
}

CarouselControl.propTypes = {
  className: _propTypes2.default.string,
  type: _propTypes2.default.oneOf(['next', 'prev']).isRequired
};

CarouselControl.defaultProps = {
  className: ''
};