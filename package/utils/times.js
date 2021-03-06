"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = times;
function times(count, iteratee) {
  var results = [];

  for (var i = 0; i < count; i += 1) {
    results.push(iteratee(i));
  }

  return results;
}