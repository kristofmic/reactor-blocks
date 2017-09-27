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

var _navbar_toggle_hoc = require('./navbar_toggle_hoc');

var _navbar_toggle_hoc2 = _interopRequireDefault(_navbar_toggle_hoc);

var _classnames2 = require('../../utils/classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _get_child_display_name = require('../../utils/get_child_display_name');

var _get_child_display_name2 = _interopRequireDefault(_get_child_display_name);

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
          hideNavbar = _props.hideNavbar,
          isNavbarVisible = _props.isNavbarVisible,
          position = _props.position,
          showNavbar = _props.showNavbar,
          theme = _props.theme,
          toggleNavbar = _props.toggleNavbar,
          expandSize = _props.expandSize,
          type = _props.type,
          other = _objectWithoutProperties(_props, ['children', 'className', 'hideNavbar', 'isNavbarVisible', 'position', 'showNavbar', 'theme', 'toggleNavbar', 'expandSize', 'type']);

      var navChildren = _react2.default.Children.map(children, function (child) {
        var childName = (0, _get_child_display_name2.default)(child);

        if (childName === 'NavbarCollapse') {
          return _react2.default.cloneElement(child, {
            show: isNavbarVisible
          });
        }

        if (childName === 'NavbarToggler') {
          return _react2.default.cloneElement(child, {
            active: isNavbarVisible,
            onClick: toggleNavbar
          });
        }

        return child;
      });

      return _react2.default.createElement(
        'nav',
        _extends({
          className: (0, _classnames3.default)('navbar navbar-expand-' + expandSize + ' navbar-' + theme, (_classnames = {}, _defineProperty(_classnames, 'bg-' + type, type), _defineProperty(_classnames, position, position), _classnames), className)
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
  expandSize: _propTypes2.default.oneOf(_constants.NAVBAR_EXPAND_SIZES),
  hideNavbar: _propTypes2.default.func.isRequired,
  isNavbarVisible: _propTypes2.default.bool.isRequired,
  position: _propTypes2.default.oneOf(_constants.NAVBAR_POSITION),
  showNavbar: _propTypes2.default.func.isRequired,
  theme: _propTypes2.default.oneOf(_constants.NAVBAR_THEMES),
  toggleNavbar: _propTypes2.default.func.isRequired,
  type: _propTypes2.default.oneOf(_constants.NAVBAR_CONTEXT_TYPES)
};

Navbar.defaultProps = {
  className: '',
  expandSize: 'lg',
  theme: 'light'
};

var WrappedNavbar = (0, _navbar_toggle_hoc2.default)(Navbar);

WrappedNavbar.displayName = 'Navbar';

exports.default = WrappedNavbar;