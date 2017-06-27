'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Navbar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _navbar_toggle_hoc = require('./navbar_toggle_hoc');

var _navbar_toggle_hoc2 = _interopRequireDefault(_navbar_toggle_hoc);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _constants = require('../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_React$PureComponent) {
  _inherits(Navbar, _React$PureComponent);

  function Navbar() {
    _classCallCheck(this, Navbar);

    return _possibleConstructorReturn(this, (Navbar.__proto__ || Object.getPrototypeOf(Navbar)).apply(this, arguments));
  }

  _createClass(Navbar, [{
    key: 'render',
    value: function render() {
      var _classnames;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          hideMenu = _props.hideMenu,
          isMenuVisible = _props.isMenuVisible,
          position = _props.position,
          showMenu = _props.showMenu,
          theme = _props.theme,
          toggleMenu = _props.toggleMenu,
          toggleSize = _props.toggleSize,
          type = _props.type,
          other = _objectWithoutProperties(_props, ['children', 'className', 'hideMenu', 'isMenuVisible', 'position', 'showMenu', 'theme', 'toggleMenu', 'toggleSize', 'type']);

      var navChildren = _react2.default.Children.map(children, function (child) {
        if (child.type.name === 'NavbarCollapse') {
          return _react2.default.cloneElement(child, {
            show: isMenuVisible
          });
        }

        if (child.type.name === 'NavbarToggler') {
          return _react2.default.cloneElement(child, {
            active: isMenuVisible,
            onClick: toggleMenu
          });
        }

        return child;
      });

      return _react2.default.createElement(
        'nav',
        _extends({
          className: (0, _classnames3.default)('navbar navbar-toggleable-' + toggleSize + ' navbar-' + theme, (_classnames = {}, _defineProperty(_classnames, 'bg-' + type, type), _defineProperty(_classnames, 'position', position), _classnames), className)
        }, other),
        navChildren
      );
    }
  }]);

  return Navbar;
}(_react2.default.PureComponent);

Navbar.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  hideMenu: _propTypes2.default.func.isRequired,
  isMenuVisible: _propTypes2.default.bool.isRequired,
  position: _propTypes2.default.oneOf(_constants.NAVBAR_POSITION),
  showMenu: _propTypes2.default.func.isRequired,
  theme: _propTypes2.default.oneOf(_constants.NAVBAR_THEMES),
  toggleMenu: _propTypes2.default.func.isRequired,
  toggleSize: _propTypes2.default.oneOf(_constants.NAVBAR_TOGGLEABLE_SIZES),
  type: _propTypes2.default.oneOf(_constants.NAVBAR_CONTEXT_TYPES)
};

Navbar.defaultProps = {
  className: '',
  theme: 'light',
  toggleSize: 'xl'
};

exports.default = (0, _navbar_toggle_hoc2.default)(Navbar);
exports.Navbar = Navbar;