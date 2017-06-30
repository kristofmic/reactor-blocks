'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = animateInHOC;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */


function animateInHOC(Component) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _config$transitionDur = config.transitionDuration,
      transitionDuration = _config$transitionDur === undefined ? 0 : _config$transitionDur;

  var AnimateInHOC = function (_React$PureComponent) {
    _inherits(AnimateInHOC, _React$PureComponent);

    function AnimateInHOC(props) {
      _classCallCheck(this, AnimateInHOC);

      var _this = _possibleConstructorReturn(this, (AnimateInHOC.__proto__ || Object.getPrototypeOf(AnimateInHOC)).call(this, props));

      _this.animateIn = function () {
        _this.setState({
          enter: true
        }, function () {
          window.requestAnimationFrame(function () {
            _this.setState({
              show: true
            });

            _this.showTimeout = null;
          });
        });
      };

      _this.animateOut = function () {
        _this.setState({
          show: false
        }, function () {
          setTimeout(function () {
            _this.setState({
              enter: false
            });

            _this.showTimeout = null;
          }, transitionDuration);
        });
      };

      _this.hideComponent = function () {
        var show = _this.state.show;


        if (_this.showTimeout) {
          clearTimeout(_this.showTimeout);
          _this.showTimeout = null;
        }

        if (!show) {
          return;
        }

        _this.animateOut();
      };

      _this.showComponent = function () {
        var delay = _this.props.delay;
        var show = _this.state.show;


        if (show || _this.showTimeout) {
          return;
        }

        if (delay) {
          _this.showTimeout = setTimeout(_this.animateIn, delay);
        } else {
          _this.animateIn();
        }
      };

      _this.state = {
        enter: false,
        show: false
      };
      return _this;
    }

    _createClass(AnimateInHOC, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        if (this.props.show) {
          this.showComponent();
        }
      }
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        console.log(nextProps, this.props);
        if (nextProps.show && !this.props.show) {
          this.showComponent();
        } else if (!nextProps.show && this.props.show) {
          this.hideComponent();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _props = this.props,
            delay = _props.delay,
            other = _objectWithoutProperties(_props, ['delay']);

        return _react2.default.createElement(Component, _extends({}, other, this.state));
      }
    }]);

    return AnimateInHOC;
  }(_react2.default.PureComponent);

  AnimateInHOC.propTypes = {
    delay: _propTypes2.default.number,
    show: _propTypes2.default.bool
  };

  AnimateInHOC.WrappedComponent = Component;

  return AnimateInHOC;
}