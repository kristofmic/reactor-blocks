'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = Image;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _classes = require('../../utils/classes');

var CLASSES = _interopRequireWildcard(_classes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Image(props) {
  var _classnames;

  var alt = props.alt,
      center = props.center,
      className = props.className,
      responsive = props.responsive,
      rounded = props.rounded,
      source = props.source,
      src = props.src,
      thumbnail = props.thumbnail,
      other = _objectWithoutProperties(props, ['alt', 'center', 'className', 'responsive', 'rounded', 'source', 'src', 'thumbnail']);

  if (source == null && src == null) {
    console.warn(new Error('Image missing the "source" or "src" prop.'));
  }

  return _react2.default.createElement('img', _extends({
    alt: alt,
    className: (0, _classnames3.default)((_classnames = {
      'img-fluid': responsive,
      'img-thumbnail': thumbnail
    }, _defineProperty(_classnames, CLASSES.MARGIN.X_AUTO, center), _defineProperty(_classnames, CLASSES.DISPLAY.BLOCK, center), _defineProperty(_classnames, 'rounded', rounded), _classnames), className),
    src: source || src
  }, other));
}

Image.propTypes = {
  alt: _propTypes2.default.string,
  center: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  responsive: _propTypes2.default.bool,
  rounded: _propTypes2.default.bool,
  source: _propTypes2.default.string,
  src: _propTypes2.default.string,
  thumbnail: _propTypes2.default.bool
};

Image.defaultProps = {
  center: false,
  className: '',
  responsive: false,
  rounded: false,
  thumbnail: false
};