'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = toggleComponentHOCFactory;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */


function toggleComponentHOCFactory() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _config$autoDismiss = config.autoDismiss,
      autoDismiss = _config$autoDismiss === undefined ? false : _config$autoDismiss,
      _config$name = config.name,
      name = _config$name === undefined ? 'Component' : _config$name;


  return function toggleComponentHOC(Component) {
    var ToggleComponentHOC = function (_React$PureComponent) {
      _inherits(ToggleComponentHOC, _React$PureComponent);

      function ToggleComponentHOC(props) {
        _classCallCheck(this, ToggleComponentHOC);

        var _this = _possibleConstructorReturn(this, (ToggleComponentHOC.__proto__ || Object.getPrototypeOf(ToggleComponentHOC)).call(this, props));

        _this.handleWindowClick = function (e) {
          var isComponentVisible = _this.state.isComponentVisible;


          if (isComponentVisible) {
            var thisNode = _reactDom2.default.findDOMNode(_this); // eslint-disable-line react/no-find-dom-node

            if (!thisNode.contains(e.target)) {
              _this.hideComponent();
            }
          }
        };

        _this.hideComponent = function () {
          var isComponentVisible = _this.state.isComponentVisible;


          if (isComponentVisible && _this.isMounted) {
            _this.setState({
              isComponentVisible: false
            });
          }
        };

        _this.showComponent = function () {
          var isComponentVisible = _this.state.isComponentVisible;


          if (!isComponentVisible && _this.isMounted) {
            _this.setState({
              isComponentVisible: true
            });
          }
        };

        _this.toggleComponent = function () {
          var isComponentVisible = _this.state.isComponentVisible;


          if (isComponentVisible) {
            _this.hideComponent();
          } else {
            _this.showComponent();
          }
        };

        _this.state = {
          isComponentVisible: false
        };
        return _this;
      }

      _createClass(ToggleComponentHOC, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          this.isMounted = true;

          if (autoDismiss) {
            window.addEventListener('click', this.handleWindowClick);
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.isMounted = false;

          if (autoDismiss) {
            window.removeEventListener('click', this.handleWindowClick);
          }
        }
      }, {
        key: 'render',
        value: function render() {
          var _otherProps;

          var isComponentVisible = this.state.isComponentVisible;


          var otherProps = (_otherProps = {}, _defineProperty(_otherProps, 'is' + name + 'Visible', isComponentVisible), _defineProperty(_otherProps, 'hide' + name, this.hideComponent), _defineProperty(_otherProps, 'show' + name, this.showComponent), _defineProperty(_otherProps, 'toggle' + name, this.toggleComponent), _otherProps);

          return _react2.default.createElement(Component, _extends({}, this.props, otherProps));
        }
      }]);

      return ToggleComponentHOC;
    }(_react2.default.PureComponent);

    ToggleComponentHOC.WrappedComponent = Component;

    return ToggleComponentHOC;
  };
}