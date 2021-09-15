exports.isPlaintObject = function (data) {
  return Object.prototype.toString.call(data) === '[object Object]';
};
exports.isArray = function (data) {
  if (Array && Array.isArray) {
    return Array.isArray(data);
  }
  return Object.prototype.toString.call(data) === '[object Array]';
};
exports.isNumber = function (data) {
  return Object.prototype.toString.call(data) === '[object Number]';
};
