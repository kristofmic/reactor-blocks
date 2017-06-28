'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toggleBodyClass;
/* global document */

function toggleBodyClass(className, add) {
  var _document = document,
      body = _document.body;

  var hasClass = body.className.indexOf(className) > -1;

  if (hasClass && !add) {
    body.className = body.className.replace(className, '').trim();
  } else if (!hasClass && add) {
    body.className = (body.className + ' ' + className).trim();
  }
}