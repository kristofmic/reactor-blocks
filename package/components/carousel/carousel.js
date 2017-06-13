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

var _carousel_control = require('./carousel_control');

var _carousel_control2 = _interopRequireDefault(_carousel_control);

var _carousel_indicators = require('./carousel_indicators');

var _carousel_indicators2 = _interopRequireDefault(_carousel_indicators);

var _carousel_item = require('./carousel_item');

var _carousel_item2 = _interopRequireDefault(_carousel_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */


var Carousel = function (_React$PureComponent) {
  _inherits(Carousel, _React$PureComponent);

  function Carousel(props) {
    _classCallCheck(this, Carousel);

    var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this, props));

    _this.setActiveItem = function (nextIndex) {
      var images = _this.props.images;
      var activeIndex = _this.state.activeIndex;

      var transition = 'left';
      var sibling = 'next';

      if (nextIndex === activeIndex || _this.isTransitioning) {
        return;
      }

      _this.isTransitioning = true;

      if (nextIndex < activeIndex) {
        transition = 'right';
        sibling = 'prev';
      }

      if (nextIndex >= images.length) {
        nextIndex = 0; // eslint-disable-line no-param-reassign
      } else if (nextIndex < 0) {
        nextIndex = images.length - 1; // eslint-disable-line no-param-reassign
      }

      _this.setState(_defineProperty({}, sibling, nextIndex), function () {
        window.requestAnimationFrame(function () {
          _this.setState({
            transition: transition
          });
        });
      });
    };

    _this.nextItem = function () {
      var activeIndex = _this.state.activeIndex;


      _this.setActiveItem(activeIndex + 1);
    };

    _this.prevItem = function () {
      var activeIndex = _this.state.activeIndex;


      _this.setActiveItem(activeIndex - 1);
    };

    _this.handleTransitionEnd = function () {
      var _this$state = _this.state,
          activeIndex = _this$state.activeIndex,
          next = _this$state.next,
          prev = _this$state.prev;

      var nextActiveIndex = activeIndex;

      if (!_this.isTransitioning) {
        return;
      }

      if (next != null || prev != null) {
        nextActiveIndex = next || prev || 0;
      }

      _this.setState({
        activeIndex: nextActiveIndex,
        next: null,
        prev: null,
        transition: null
      }, function () {
        _this.recycleInterval();
        _this.isTransitioning = false;
      });
    };

    _this.recycleInterval = function () {
      var cycle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props.cycle;
      var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.props.interval;

      if (_this.cycleInterval) {
        clearInterval(_this.cycleInterval);
      }

      if (cycle) {
        _this.cycleInterval = setInterval(_this.nextItem, interval);
      }
    };

    _this.state = {
      activeIndex: 0,
      next: null,
      prev: null,
      transition: null
    };
    _this.isTransitioning = false;
    return _this;
  }

  _createClass(Carousel, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.recycleInterval();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.cycle !== this.props.cycle || nextProps.interval !== this.props.interval) {
        this.recycleInterval(nextProps.cycle, nextProps.interval);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.cycleInterval);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          controls = _props.controls,
          cycle = _props.cycle,
          images = _props.images,
          indicators = _props.indicators,
          interval = _props.interval,
          other = _objectWithoutProperties(_props, ['children', 'className', 'controls', 'cycle', 'images', 'indicators', 'interval']);

      var _state = this.state,
          activeIndex = _state.activeIndex,
          next = _state.next,
          prev = _state.prev,
          transition = _state.transition;

      var activeIndicatorIndex = activeIndex;

      if (next != null || prev != null) {
        activeIndicatorIndex = next || prev || 0;
      }

      return _react2.default.createElement(
        'div',
        _extends({ className: 'carousel slide d-inline-block ' + className }, other),
        indicators && _react2.default.createElement(_carousel_indicators2.default, {
          activeIndex: activeIndicatorIndex,
          count: images.length,
          onIndicatorClick: this.setActiveItem
        }),
        _react2.default.createElement(
          'div',
          { className: 'carousel-inner', role: 'listbox' },
          images.map(function (image, i) {
            return _react2.default.createElement(_carousel_item2.default, _extends({
              active: i === activeIndex,
              key: image.imageSource,
              next: i === next,
              onTransitionEnd: _this2.handleTransitionEnd,
              prev: i === prev,
              transition: transition
            }, image));
          })
        ),
        controls && _react2.default.createElement(_carousel_control2.default, { onClick: this.prevItem, type: 'prev' }),
        controls && _react2.default.createElement(_carousel_control2.default, { onClick: this.nextItem, type: 'next' })
      );
    }
  }]);

  return Carousel;
}(_react2.default.PureComponent);

exports.default = Carousel;


Carousel.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  controls: _propTypes2.default.bool,
  cycle: _propTypes2.default.bool,
  images: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    imageAlt: _propTypes2.default.string,
    imageSource: _propTypes2.default.string.isRequired
  })),
  indicators: _propTypes2.default.bool,
  interval: _propTypes2.default.number
};

Carousel.defaultProps = {
  className: '',
  controls: false,
  cycle: false,
  images: [],
  indicators: false,
  interval: 5000
};