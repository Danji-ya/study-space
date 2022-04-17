// {
//   "presets": [
//     [
//       "@babel/preset-env",
//       {
//         "useBuiltIns": "usage",
//         "corejs": 3
//       }
//     ]
//   ]
// }

"use strict";

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

require("core-js/modules/es.promise.js");

require("core-js/modules/es.array.includes.js");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.symbol.iterator.js");

require("core-js/modules/es.array.iterator.js");

require("core-js/modules/es.string.iterator.js");

require("core-js/modules/web.dom-collections.iterator.js");

var sym = Symbol();
var promise = Promise.resolve();
var check = arr.includes("yeah!");
console.log(arr[Symbol.iterator]());

var test = function test(tt) {
  return console.log(tt);
};
