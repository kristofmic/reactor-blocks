'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _image = require('../../content/image');

var _image2 = _interopRequireDefault(_image);

var _bindref = require('../../utils/bindref');

var _bindref2 = _interopRequireDefault(_bindref);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _noop = require('../../utils/noop');

var _noop2 = _interopRequireDefault(_noop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CarouselItem = function (_React$PureComponent) {
  _inherits(CarouselItem, _React$PureComponent);

  function CarouselItem(props) {
    _classCallCheck(this, CarouselItem);

    var _this = _possibleConstructorReturn(this, (CarouselItem.__proto__ || Object.getPrototypeOf(CarouselItem)).call(this, props));

    _this.bindCarouselItem = (0, _bindref2.default)('carouselItem', _this);
    return _this;
  }

  _createClass(CarouselItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.carouselItem) {
        this.carouselItem.addEventListener('transitionend', this.props.onTransitionEnd, false);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.carouselItem) {
        this.carouselItem.removeEventListener('transitionend', this.props.onTransitionEnd);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          active = _props.active,
          className = _props.className,
          imageAlt = _props.imageAlt,
          imageSource = _props.imageSource,
          next = _props.next,
          onSiblingEnter = _props.onSiblingEnter,
          onTransitionEnd = _props.onTransitionEnd,
          prev = _props.prev,
          transition = _props.transition,
          other = _objectWithoutProperties(_props, ['active', 'className', 'imageAlt', 'imageSource', 'next', 'onSiblingEnter', 'onTransitionEnd', 'prev', 'transition']);

      return _react2.default.createElement(
        'div',
        _extends({
          className: (0, _classnames3.default)('carousel-item', _defineProperty({
            active: active,
            'carousel-item-next': next,
            'carousel-item-prev': prev
          }, 'carousel-item-' + transition, transition && (active || next || prev)), className),
          ref: this.bindCarouselItem
        }, other),
        _react2.default.createElement(_image2.default, {
          alt: imageAlt,
          className: 'd-block',
          responsive: true,
          source: imageSource
        })
      );
    }
  }]);

  return CarouselItem;
}(_react2.default.PureComponent);

exports.default = CarouselItem;


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