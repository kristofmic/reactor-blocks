"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getChildDisplayName;
function getChildDisplayName(child) {
  if (child == null) {
    return;
  }

  var _child$type = child.type,
      type = _child$type === undefined ? {} : _child$type;


  return type.displayName || type.name || type;
}