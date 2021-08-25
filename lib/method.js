/**
 * 函数节流throttle
 * @param 事件触发的操作
 * @param 延迟执行函数的时间
 * @param 超过多长时间必须执行一次函数
 * @returns {Function}
 */
exports.throttle = function (method, delay, mustRunDelay) {
  var timer = null;
  var args = arguments;
  var start = 0;
  var now = 0;
  return function () {
    var context = this;
    now = Date.now();
    if (!start) {
      start = now;
    }
    if (now - start >= mustRunDelay) {
      method.apply(context, args);
      start = Date.now();
    } else {
      clearTimeout(timer);
      timer = setTimeout(function () {
        method.apply(context, args);
      }, delay);
    }
  };
}
/**
 * 封装的方法之闭包
 * 闭包 如果想让一个函数执行完后，函数内的某个变量（timer）仍旧保留，就可以使用闭包
 * 把要保存的变量在父作用域声明，其他的语句放到子作用域里，并且作为一个function返回
 * 所以闭包可以理解为分离变量
 */
exports.debounce = function (method, delay) {
  var timer = null;
  return function () {
    var context = this,
      args = arguments;
    clearTimeout(timer);
    timer = setTimeout(function () {
      method.apply(context, args);
    }, delay);
  };
}
