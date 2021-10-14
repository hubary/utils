const { writeStringToFile } = require('./file.js');
const { formatDate } = require('./date.js');
exports.createAppBuildTime = function (opts) {
  let options = {
    code: `exports.AppBuildTime = "${formatDate(new Date())}";`,
    filePath: './build-time.js',
    callback: null,
  };
  if (opts && Object.prototype.toString.call(opts) === '[object Object]') {
    if (opts.code) {
      options.code = opts.code;
    }
    if (opts.filePath) {
      options.filePath = opts.filePath;
    }
    if (opts.callback) {
      options.callback = opts.callback;
    }
  }
  return writeStringToFile(options.code, options.filePath, options.callback);
};
