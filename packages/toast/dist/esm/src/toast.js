var toast = function toast() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Hello Toast";
  return msg;
};
var toastAddTwo = function toastAddTwo() {
  var msg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello Toast';
  return "".concat(msg, "2");
};

export { toast, toastAddTwo };
//# sourceMappingURL=toast.js.map
