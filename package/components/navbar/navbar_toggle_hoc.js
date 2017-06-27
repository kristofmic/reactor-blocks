'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = navbarToggleHOC;

var _dropdown = require('../dropdown');

function navbarToggleHOC(Component) {
  var NavbarToggleHOC = (0, _dropdown.dropdownHOC)(Component);

  NavbarToggleHOC.displayName = 'NavbarToggleHOC';

  return NavbarToggleHOC;
}