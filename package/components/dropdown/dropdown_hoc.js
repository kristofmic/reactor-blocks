'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = dropdownHOC;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global window */


function dropdownHOC(Component) {
  var DropdownHOC = function (_React$PureComponent) {
    _inherits(DropdownHOC, _React$PureComponent);

    function DropdownHOC(props) {
      _classCallCheck(this, DropdownHOC);

      var _this = _possibleConstructorReturn(this, (DropdownHOC.__proto__ || Object.getPrototypeOf(DropdownHOC)).call(this, props));

      _this.handleWindowClick = function (e) {
        var isMenuVisible = _this.state.isMenuVisible;


        if (isMenuVisible) {
          var thisNode = _reactDom2.default.findDOMNode(_this); // eslint-disable-line react/no-find-dom-node

          if (!thisNode.contains(e.target)) {
            _this.hideMenu();
          }
        }
      };

      _this.hideMenu = function () {
        var isMenuVisible = _this.state.isMenuVisible;


        if (isMenuVisible) {
          _this.setState({
            isMenuVisible: false
          });
        }
      };

      _this.showMenu = function () {
        var isMenuVisible = _this.state.isMenuVisible;


        if (!isMenuVisible) {
          _this.setState({
            isMenuVisible: true
          });
        }
      };

      _this.toggleMenu = function () {
        var isMenuVisible = _this.state.isMenuVisible;


        if (isMenuVisible) {
          _this.hideMenu();
        } else {
          _this.showMenu();
        }
      };

      _this.state = {
        isMenuVisible: false
      };
      return _this;
    }

    _createClass(DropdownHOC, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.addEventListener('click', this.handleWindowClick);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        window.removeEventListener('click', this.handleWindowClick);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(Component, _extends({}, this.props, this.state, {
          hideMenu: this.hideMenu,
          showMenu: this.showMenu,
          toggleMenu: this.toggleMenu
        }));
      }
    }]);

    return DropdownHOC;
  }(_react2.default.PureComponent);

  ;

  DropdownHOC.WrappedComponent = Component;

  return DropdownHOC;
}