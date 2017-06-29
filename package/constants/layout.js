'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var COLUMN_WIDTHS = exports.COLUMN_WIDTHS = [1, '1', 2, '2', 3, '3', 4, '4', 5, '5', 6, '6', 7, '7', 8, '8', 9, '9', 10, '10', 11, '11', 12, '12', 'auto'];

var COLUMN_ORDER = exports.COLUMN_ORDER = ['unordered', 'first', 'last'];

var ALIGNMENT = exports.ALIGNMENT = ['start', 'center', 'end'];

var VERTICAL_ALIGNMENT = exports.VERTICAL_ALIGNMENT = ALIGNMENT;

var HORIZONTAL_ALIGNMENT = exports.HORIZONTAL_ALIGNMENT = ALIGNMENT;

var HORIZONTAL_JUSTIFICATION = exports.HORIZONTAL_JUSTIFICATION = HORIZONTAL_ALIGNMENT.concat(['around', 'between']);

var HORIZONTAL_POSITION = exports.HORIZONTAL_POSITION = ['left', 'right'];

var VERTICAL_POSITION = exports.VERTICAL_POSITION = ['top', 'bottom'];

var DIRECTIONS = exports.DIRECTIONS = HORIZONTAL_POSITION.concat(VERTICAL_POSITION);