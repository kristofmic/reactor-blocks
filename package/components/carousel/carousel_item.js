'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = CarouselItem;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _image = require('../../content/image');

var _image2 = _interopRequireDefault(_image);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _noop = require('../../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

var _classes = require('../../utils/classes');

var CLASSES = _interopRequireWildcard(_classes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function CarouselItem(props) {
  var active = props.active,
      className = props.className,
      imageAlt = props.imageAlt,
      imageSource = props.imageSource,
      next = props.next,
      onSiblingEnter = props.onSiblingEnter,
      onTransitionEnd = props.onTransitionEnd,
      prev = props.prev,
      transition = props.transition,
      other = _objectWithoutProperties(props, ['active', 'className', 'imageAlt', 'imageSource', 'next', 'onSiblingEnter', 'onTransitionEnd', 'prev', 'transition']);

  return _react2.default.createElement(
    'div',
    _extends({
      className: (0, _classnames3.default)('carousel-item', _defineProperty({
        active: active,
        'carousel-item-next': next,
        'carousel-item-prev': prev
      }, 'carousel-item-' + transition, transition && (active || next || prev)), className),
      onTransitionEnd: onTransitionEnd
    }, other),
    _react2.default.createElement(_image2.default, {
      alt: imageAlt,
      className: CLASSES.DISPLAY.BLOCK,
      responsive: true,
      source: imageSource
    })
  );
}

CarouselItem.propTypes = {
  active: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  imageAlt: _propTypes2.default.string,
  imageSource: _propTypes2.default.string.isRequired,
  next: _propTypes2.default.bool,
  onSiblingEnter: _propTypes2.default.func,
  onTransitionEnd: _propTypes2.default.func,
  prev: _propTypes2.default.bool,
  transition: _propTypes2.default.oneOf(['left', 'right'])
};

CarouselItem.defaultProps = {
  active: false,
  className: '',
  next: false,
  onSiblingEnter: _noop2.default,
  onTransitionEnd: _noop2.default,
  prev: false
};