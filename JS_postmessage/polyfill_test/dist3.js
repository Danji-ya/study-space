// {
//   "presets": [
//     [
//       "@babel/preset-env",
//     ]
//   ],
//   "plugins": [["@babel/plugin-transform-runtime",{"corejs":3}]]
// }

"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _symbol = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/symbol"));

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _includes = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/includes"));

var _getIterator2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js/get-iterator"));

var sym = (0, _symbol["default"])();

var promise = _promise["default"].resolve();

var check = (0, _includes["default"])(arr).call(arr, "yeah!");
console.log((0, _getIterator2["default"])(arr));

var test = function test(tt) {
  return console.log(tt);
};
