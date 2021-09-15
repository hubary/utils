const { createAppBuildTime } = require('../lib/app-build-time');
createAppBuildTime({
  filePath: __dirname + '/build-time.js',
  callback: function () {
    console.log('callback success');
  },
});
